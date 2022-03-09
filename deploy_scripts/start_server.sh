echo "app start ;)"
source /home/ec2-user/.bash_profile
cd /home/ec2-user/my-app
#npm install -g next
sudo mkdir node_modules
sudo chmod -R 777 node_modules
npm install
#npm run build
npm run start > /dev/null 2> /dev/null < /dev/null &