FROM node:8.15.0-alpine
# FROM node:8
# FROM centos/nodejs-8-centos7:latest
#FROM node:7.7.2-alpine

WORKDIR /srv/app

COPY package.json ./
RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]