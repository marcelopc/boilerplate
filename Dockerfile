FROM node:alpine

RUN npm install -g pnpm

WORKDIR /usr/app

COPY package*.json pnpm-lock.yaml ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]