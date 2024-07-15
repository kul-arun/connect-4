FROM node:22-alpine AS build
WORKDIR /tmp
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM node:22-alpine
WORKDIR /app
COPY --from=build /tmp/dist ./dist
RUN npm install -g serve
EXPOSE 3000
ENTRYPOINT ["serve","-s","dist","-l","3000"]