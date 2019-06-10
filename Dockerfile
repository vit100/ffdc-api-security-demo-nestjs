FROM node as build
ENV NODE_ENV build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . .
RUN npm install
RUN npm run build:prod

FROM node
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 100
CMD npm run start:prod
