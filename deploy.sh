#!/bin/bash
#Start with an if statement that checks the parameter and sets variables like the distribution id and bucket.
set -e
env="$1"
bucket=""
distribution=""
if [[ -z $env ]]
then
  echo 'please provide one of dev, staging, production for the environment'
  exit 1
else if [ $env = 'staging' ]
  then
    bucket="eas-web-staging"
    distribution="E1A014NQ5P9AC"
  else if [ $env = 'production' ]
    then
      bucket="eas-web"
      distribution="E2QM0TQCMB9DOQ"
    else if [ $env = 'dev' ]
      then
        bucket="eas-web-dev"
        distribution="E29KOUAZ5WVXN4"
      else
        echo "Unknown environment: $env"
        exit 1
      fi
    fi
  fi
fi

# Check package is installed
function checkPackageInstalled {
  if ! type $1 > /dev/null; then
    echo $1 `is not installed`
    exit 2
  fi
}


if [ $env != "" ]
then
  checkPackageInstalled 'npm'
  checkPackageInstalled 'aws'

  if [ $env = 'production' ]
  then
    ./copy-to-s3.sh
  else
    ./copy-to-s3.sh -$env
  fi
  echo "Invalidating caches"
  aws cloudfront create-invalidation --distribution-id $distribution --paths '/*'
  echo "Pushing revision"
  echo `git rev-parse HEAD` > revision.txt
  aws s3api put-object --bucket $bucket --key revision.txt --body ./revision.txt --content-type text/plain


else
  #Print the parameter that was provided here
  echo "Didn't recognize environment $env"
  exit 4
fi
