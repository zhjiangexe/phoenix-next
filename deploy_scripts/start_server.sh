#!/bin/bash
echo starting server

# here we just use npm to run the build
cd /home/ec2-user/my-app
echo building application...
npm run build

# start the application with pm2
echo starting application...
#sudo pm2 start npm -- run production
npm run start