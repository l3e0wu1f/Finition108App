#!/bin/bash

# Wait until Certbot finishes and creates the .certbot_done file
while [ ! -f /etc/letsencrypt/.certbot_done ]; do
  echo "Waiting for Certbot to finish..."
  sleep 5
done

# Add Certbot renewal to crontab
echo "0 0 * * * root certbot renew --dry-run && certbot renew" >> /etc/crontab

# Start nginx after Certbot has completed
nginx -g "daemon off;"
