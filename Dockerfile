FROM node:18-alpine

WORKDIR /mommy

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm","run","start"]