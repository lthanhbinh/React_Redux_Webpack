# EAS Web
An application for all customers can ...

## Architecture
This is a React+Redux based application. It does not currently use any component framework. One may be adopted in the
future. Webpack builds and packages the application. SASS manages CSS. It once use jQuery. Consider removing any
references found to jQuery abd cetainly DO NOT! add any new dependencies on jQuery.

This application is hosted as static files on AWS using S3 and CloudFront. It was once hosted on EC2 instances. Any
reference to the former EC2 instance based approach should be ignored.

Build and package management are both handled by NPM.

!!NOTE: An upgrade to webpack 2.0 is deeply needed.

To upgrade from webpack 1 to webpack 2
1. Run command line: **npm install --save-dev webpack@\<latest version>**
2. Get all dependencies: **npm install**
3. After that you run webpack in watch mode: **npm run webpack-watch**
4. Update source scripts in index.html:
 **src="build/vendor.bundle.js"**
 **src="build/js.bundle.js"**
5. Finally, use **npm run dev** to run the application

Notes: When you pull code updates.
1. You need to run: **npm install**
2. Use **npm run dev** to run the application

## Building, Running and Deploying
There are 'scripts' in package.json that can be used to build and run this application locally and deploy it to S3.

All dependencies must be kept in package.json. Always use **npm install --save \<dependency name>** to install dependencies.

After pulling code updates from git, user **npm install** to get all dependencies.

You can run webpack in watch mode using: **npm run webpack-watch** This will not work without an npm install.

Use: **npm run dev** to run the application locally AND start webpack in watch mode. This is an efficient way to code and
test chages. This will not work without an npm install.

Use: **npm run deploy-production** and **npm run deploy-staging** to deploy to production and staging. You will need
an installed and configured instance of the
[aws command line tool](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) for this work. You will also
need prvileges to deploy to this S3 bucket.

## Debugging
Webpack is configured to generate source maps for javascript files. This means that you can use debugging tools
provided by web browsers to set break points in code, inspect variable values, step through code etc. This is an
invaluable tool for trouble shooting code. It's especially helpful when learning new frameworks because it can
provide valuable information about how they work.

For example if you open the developer tooks in Chrome, you can click on the the sources tab. In the navigation pane
(by default on the left of the tools) there will be a webpack:// entry. The origional source files will under that
entry in the ./app folder. You can then browse to these and set breakpoints
