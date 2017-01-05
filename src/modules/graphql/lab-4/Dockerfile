FROM node:7.3.0

RUN npm install -g yarn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json .
ADD yarn.lock .
RUN yarn

ADD . .

CMD [ "npm", "run", "start:lab-4" ]
