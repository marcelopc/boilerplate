FROM node:alpine

RUN npm install -g pnpm

WORKDIR /usr/app

COPY package.json ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]