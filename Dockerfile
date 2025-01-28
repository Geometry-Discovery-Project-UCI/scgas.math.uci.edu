FROM node:18.8

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "run", "serve"]

