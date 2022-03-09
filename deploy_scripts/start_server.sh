echo "app start ;)"
source /home/ec2-user/.bashrc
cd /home/ec2-user/my-app
#npm install -g next
npm install
#npm run build
npm run start > /dev/null 2> /dev/null < /dev/null &
