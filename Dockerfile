FROM node:lts-slim

COPY . /app
WORKDIR /app
RUN corepack enable && pnpm install

ENTRYPOINT [ "pnpm", "serve" ]
