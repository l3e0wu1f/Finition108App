# Dockerfile for front end
FROM node:18

ENV npm_config_platform=linux
ENV NODE_ENV=production
ENV AWS_ACCESS_KEY_ID=DO003NB89L7TREA74BHW
ENV AWS_SECRET_ACCESS_KEY=cTm4w/ahaYGQmqv65x7fVsKBY/DWnIOMT7zvuCRwBvE

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
RUN npm install -g nuxt @nuxt/kit @nuxt/bridge
RUN npm i -D @iconify-json/lineicons
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
