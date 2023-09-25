FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN npm install --force
RUN npm run build

FROM httpd:alpine

WORKDIR /usr/local/apache2/htdocs

COPY --from=builder /app/dist/material-pro-angular-lite/ .