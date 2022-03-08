#!/bin/bash
echo installing application with npm
cd /home/ec2-user/my-app
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
yum -y install nodejs npm
