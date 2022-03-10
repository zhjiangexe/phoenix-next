echo "app start ;)"
#!/bin/bash
sudo chmod -R 777 /home/ec2-user/my-app
cd /home/ec2-user/my-app

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)m

#npm install -g next
#sudo mkdir node_modules
#sudo chmod -R 777 node_modules
npm install
#npm run build
npm run start > /dev/null 2> /dev/null < /dev/null &