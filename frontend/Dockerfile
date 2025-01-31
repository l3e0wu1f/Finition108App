# Dockerfile for front end
FROM node:18

ENV npm_config_platform=linux
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force
RUN apt-get update && apt-get install -y \
  build-essential \
  libvips-dev \
  python3
RUN rm -rf node_modules package-lock.json
RUN npm install -g npm@6
RUN npm install
RUN npm install -g nuxt @nuxt/kit
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
