FROM node:carbon

WORKDIR /app

COPY package.json .

RUN yarn

COPY . ./app

EXPOSE 3000