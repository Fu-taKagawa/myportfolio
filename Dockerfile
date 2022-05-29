FROM node:14.13.1 
WORKDIR /usr/src/app/

RUN npm install 
RUN npm install react-scripts