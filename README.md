
### Configure Ubuntu Server

- Create EC2 instance (ubuntu, allow http/https traffic) or use personal server
- ```sudo apt update && sudo apt upgrade && sudo apt install nginx docker.io```
- ```sudo systemctl enable docker && sudo systemctl start docker```
- ```sudo usermod -aG docker $USER``` (log out and back in after)
- Firewall:
    ```
    sudo ufw allow OpenSSH
    sudo ufw allow 'Nginx HTTP'
    sudo ufw enable
    ```

### Nginx Config

```
sudo vim /etc/nginx/sites-available/alumni.run
```

```
server {
  server_name alumni.run;

  location / {
    proxy_pass http://localhost:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

```
sudo ln -s /etc/nginx/sites-available/alumni.run /etc/nginx/sites-enabled/alumni.run
sudo rm -f /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
sudo nginx -t
sudo nginx -s reload
```

### Deploy

```
sudo git clone https://github.com/Giansingh4710/AlumniRun /var/www/alumni.run
cd /var/www/alumni.run
./deploy.sh
```

To redeploy after changes: just run `./deploy.sh` again.

### Setup HTTPS

```
sudo ufw allow 'Nginx Full'
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d alumni.run -d www.alumni.run
sudo systemctl status certbot.timer
sudo ufw delete allow 'Nginx HTTP'
```

### Hosting on personal Server

- Namecheap > domain > NAMESERVERS > Namecheap BasicDNS
- Advanced DNS > host records like [screenshot](./other/namecheap.jpg)
- Follow the same steps above (Configure, Nginx Config, Deploy, HTTPS)
