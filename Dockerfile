# Dockerfile
FROM node:current-alpine3.22

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Don’t copy source; mount it from host
CMD ["npm", "start"]

