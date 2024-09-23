FROM docker.io/library/node:lts

COPY . /app
WORKDIR /app
RUN corepack enable && pnpm install

ENTRYPOINT [ "pnpm", "serve" ]