FROM node:20.9.0-alpine3.17

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@10.1.18

RUN node

WORKDIR /home/node/app
