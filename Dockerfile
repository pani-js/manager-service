FROM node:16

WORKDIR /app

COPY . .

RUN npm install -g npm@8.5.4

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]