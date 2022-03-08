#!/bin/bash
echo $(whoamil)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export HOME="/home/ec2-user/"
cd /home/ec2-user/my-app
npm install
#echo installing pm2
#sudo npm install pm2 -g