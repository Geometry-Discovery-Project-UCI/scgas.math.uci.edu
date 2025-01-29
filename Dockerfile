FROM node:20


WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g npm@9 && npm install -g pnpm@9 && pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "run", "serve"]

