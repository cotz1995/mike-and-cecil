import json
import logging
import os

import boto3
from botocore.exceptions import ClientError


def lambda_handler(event, context):
    region = os.environ.get('AWS_REGION', 'us-east-1')
    bucketName = os.environ.get('S3_BUCKET_NAME', 'mike-and-cecil-photos')
    s3 = get_s3(region)
    bucket = s3.Bucket(bucketName)
    objects = bucket.objects.all()
    map(lambda x: (x.bucket_name, x.key), objects)

    client = boto3.client('s3')

    parsedObjects = []
    for object in objects:
        response = client.get_object(
            Bucket=bucketName,
            Key=object.key,
            Range='bytes=0-0'
        )
        metaData = json.loads(json.dumps(response['Metadata']))

        parsedObjects.append({
            'key': object.key,
            'metadata': metaData
            })
         
        
    result = {
        'statusCode': 200,
        'body': parsedObjects
    }

    return result


def get_s3(region=None): 
    """Get a Boto 3 S3 resource with a specific Region or with your default Region."""
    return boto3.resource('s3', region_name=region) if region else boto3.resource('s3')


def list_objects(bucket, prefix=None):
    """
    Lists the objects in a bucket, optionally filtered by a prefix.

    Usage is shown in usage_demo at the end of this module.

    :param bucket: The bucket to query.
    :param prefix: When specified, only objects that start with this prefix are listed.
    :return: The list of objects.
    """
    logger = logging.getLogger(__name__)

    try:
        if not prefix:
            objects = list(bucket.objects.all())
        else:
            objects = list(bucket.objects.filter(Prefix=prefix))
        logger.info("Got objects %s from bucket '%s'",
                    [o.key for o in objects], bucket.name)
    except ClientError:
        logger.exception("Couldn't get objects for bucket '%s'.", bucket.name)
        raise
    else:
        return objects
        

def configure_logging():
    levelStr = os.environ.get('LOG_LEVEL', 'WARN')
    level = get_log_level(levelStr)

    print(f'configuring logging. level={levelStr}')

    if logging.getLogger().hasHandlers:
    # The Lambda environment pre-configures a handler logging to stderr. If a handler is already configured,
    # `.basicConfig` does not execute. Thus we set the level directly.
        logging.getLogger().setLevel(level)

    else:
        logging.basicConfig(stream=sys.stdout, level=level)

    logging.info('logging configured.')


def get_log_level(name: str):
    levels = {
        "FATAL": logging.FATAL,
        "ERROR": logging.ERROR,
        "WARN": logging.WARN,
        "INFO": logging.INFO,
        "DEBUG": logging.DEBUG,
    }

    return levels[name]


if __name__ == '__main__':
    print(json.dumps(lambda_handler(None, None)))
