# install the application using npm
# we need to traverse to where the application bundle is copied too.
source /home/ec2-user/.bash_profile
echo installing application with npm
cd /home/ec2-user/my-app
npm install

#echo installing pm2
#sudo npm install pm2 -g