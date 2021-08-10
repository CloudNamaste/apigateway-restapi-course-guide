# SETUP INSTRUCTIONS FOR NGINX - EXPRESS BACKEND

## EC2
```
SSH into EC2 instance

$ sudo yum update
```

## Install nvm and node
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

$ . ~/.nvm/nvm.sh

$ nvm install node

$ node -e "console.log('Running Node.js ' + process.version)"
```

## Install NGINX
```
$ amazon-linux-extras list | grep nginx
 38  nginx1                   available    [ =stable ]

$ sudo amazon-linux-extras install nginx1
```

## Install Process Manager to run and manage the node server
```
npm install pm2 -g
```

## Clone GitHub Repo
```
sudo yum install git

git clone --branch vpclink-demo https://github.com/CloudNamaste/apigateway-restapi-course-guide.git

cd apigateway-restapi-course-guide

npm install
```

## Start server and test 
```
$ pm2 start app.js

$ curl http:localhost:3001

Express server is running fine on port 3001
```

## SET UP NGINX REVERSE PROXY
```
cd /etc/nginx

sudo vi nginx.conf

Paste the content of [nginx/nginx.conf](https://github.com/CloudNamaste/apigateway-restapi-course-guide/blob/vpclink-demo/nginx/nginx.conf)

Make sure to provide correct path for 
ssl_certificate
ssl_certificate_key
```

## Start NGINX
```
$ sudo service nginx start


$ systemctl status nginx
```
