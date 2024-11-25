
FROM node:18.19.1
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g pm2 && npm install

COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]
