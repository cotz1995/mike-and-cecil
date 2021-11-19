aws s3 cp .\dist\mike-and-cecil s3://mike-and-cecil --recursive --acl public-read --exclude "*" --include "*.js" --content-type application/javascript
aws s3 cp .\dist\mike-and-cecil s3://mike-and-cecil --recursive --acl public-read --exclude "*" --include "*.css" --content-type text/css
aws s3 cp .\dist\mike-and-cecil s3://mike-and-cecil --recursive --acl public-read --exclude "*" --include "*.html" --content-type text/html
aws s3 cp .\dist\mike-and-cecil s3://mike-and-cecil --recursive --acl public-read --exclude "*.js" --exclude "*.css" --exclude "*.html"
