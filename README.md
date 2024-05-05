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

sudo git clone https://github.com/Giansingh4710/AlumniRun /var/www/alumni.run

pm2 start npm --name alumniRun -- start
