#!/usr/bin/bash

set -e

git pull
docker build -t alumni-run .
docker stop alumni-run 2>/dev/null || true
docker rm alumni-run 2>/dev/null || true
docker run -d -p 8080:80 --restart unless-stopped --name alumni-run alumni-run
