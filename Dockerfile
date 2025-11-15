FROM node:22.20.0-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:22.20.0-alpine AS prod

WORKDIR /app

COPY --from=build /app/.output /app/.output
COPY --from=build /app/package*.json /app/

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]