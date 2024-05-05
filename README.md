
### Configure EC2 Ubuntu Instance
- Create EC2 instance. Make sure to click ubuntu and also allow http and https traffic.
- ```sudo apt update && sudo apt upgrade && sudo apt install nginx```
- ```
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - &&\
    sudo apt-get install -y nodejs
    node -v && npm -v
    ```
- Firewall Stuff (idk)
    - ```
        sudo ufw allow OpenSSH
        sudo ufw allow 'Nginx HTTP'
        sudo ufw enable
        sudo ufw status
    ```
- At this point you should be able to see the nginx page when you go to the ip address of the server


sudo mkdir /var/www/alumni.run
sudo chown -R $USER:$USER /var/www/alumni.run

sudo vim /etc/nginx/sites-available/alumni.run

server {
  server_name alumni.run alumni.run;

  location / {
    proxy_pass http://localhost:5173;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}

sudo ln -s /etc/nginx/sites-available/alumni.run /etc/nginx/sites-enabled/alumni.run
sudo rm /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

sudo git clone https://github.com/Giansingh4710/AlumniRun /var/www/alumni.run

cd /var/www/alumni.run
sudo ./deploy.sh

### How to setup https
- ```
    sudo ufw allow 'Nginx Full'
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d getshabads.xyz -d www.getshabads.xyz
    sudo systemctl status certbot.timer
    sudo ufw delete allow 'Nginx HTTP'
    sudo ufw status
```
