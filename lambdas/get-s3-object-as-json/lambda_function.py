import json
import os

import boto3
from botocore.exceptions import ClientError


def lambda_handler(event, context):
    objectKey = event.get('key', '')
    bucketName = os.environ.get('S3_BUCKET_NAME', 'mike-and-cecil-photos')
    client = boto3.client('s3')

    response = client.get_object(
        Bucket=bucketName,
        Key=objectKey,
        Range='bytes=0-0'
    )
    
    metaData = json.loads(json.dumps(response['Metadata']))

    parsedObject = {
        'key': objectKey,
        'metadata': metaData
    }
        
    result = {
        'statusCode': 200,
        'body': json.dumps(parsedObject)
    }

    return result


def get_s3(region=None): 
    """Get a Boto 3 S3 resource with a specific Region or with your default Region."""
    return boto3.resource('s3', region_name=region) if region else boto3.resource('s3')

if __name__ == '__main__':
    input = {
        'key': 'boardwalk.jpg'
    }
    print(json.dumps(lambda_handler(input, None)))
