FROM node:18-alpine AS builder
WORKDIR /task-poker-hero-bot
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build


FROM node:18-alpine AS task-poker-hero-bot
WORKDIR /task-poker-hero-bot
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install --production
COPY ./yarn.lock ./
COPY --from=builder ./task-poker-hero-bot/dist ./dist
EXPOSE 8080
CMD [ "node", "dist/index.js" ]