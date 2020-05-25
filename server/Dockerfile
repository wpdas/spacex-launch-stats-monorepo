FROM node:12.16.1-alpine3.11

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install --silent

COPY . .
CMD ["yarn", "server:watch"]