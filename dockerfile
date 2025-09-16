FROM node:alpine

WORKDIR /app

COPY . .

RUN apk add --no-cache openssl

RUN apk add --no-cache python3 make g++

RUN npm install

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]