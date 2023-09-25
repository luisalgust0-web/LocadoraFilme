FROM httpd:alpine

WORKDIR /usr/local/apache2/htdocs

COPY ./dist/material-pro-angular-lite/ .