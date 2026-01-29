#!/bin/bash
# Interactive certificate creation
echo "Creating SSL certificate interactively..."
openssl req -nodes -new -x509 -keyout server.key -out server.cert

# This would prompt you for:
# Country Name (2 letter code) [AU]: US
# State or Province Name (full name) [Some-State]: California  
# Locality Name (eg, city) []: San Francisco
# Organization Name (eg, company) [Internet Widgits Pty Ltd]: My Company
# Organizational Unit Name (eg, section) []: IT Department
# Common Name (e.g. server FQDN or your name) []: localhost
# Email Address []: your@email.com