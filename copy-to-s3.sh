#!/usr/bin/env bash

set -e

bucket=eas-web$1

echo "Emptying S3 bucket: ${bucket}"
aws s3 rm --only-show-errors  --recursive "s3://${bucket}"

echo "Uploading app to S3 bucket: ${bucket}"
aws s3 cp --only-show-errors --recursive app          "s3://${bucket}/"             --acl public-read --exclude src/*

echo "Uploading node modules to S3 bucket: ${bucket}"
aws s3 cp --only-show-errors --recursive node_modules "s3://${bucket}/node_modules" --acl public-read