FROM node:16 AS build
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM ubuntu
WORKDIR /app/
COPY --from=build /app/dist/ .