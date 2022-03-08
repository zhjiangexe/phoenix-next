source /home/ec2-user/.bash_profile
killall node
rm -rf /home/ec2-user/my-app
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
. ~/.nvm/nvm.sh
nvm install node
node -v
sudo rm -rf node_modules
sudo mkdir node_modules
chmod -R 777 node_modules
sudo rm -rf package-lock.json