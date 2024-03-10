FROM node:20-alpine

ENV NODE_OPTIONS=--max-old-space-size=4096

WORKDIR /app

COPY package*.json .

RUN npm ci && npm cache clean --force

COPY . .

# RUN npm run build

CMD ["node", ".output/server/index.mjs"]

EXPOSE 3000