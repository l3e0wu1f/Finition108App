FROM node:18

ENV npm_config_platform=linux
ENV NODE_ENV=production
ENV AWS_ACCESS_KEY_ID=DO003NB89L7TREA74BHW
ENV AWS_SECRET_ACCESS_KEY=cTm4w/ahaYGQmqv65x7fVsKBY/DWnIOMT7zvuCRwBvE

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Clean npm cache and install necessary build tools
RUN npm cache clean --force
RUN apt-get update && apt-get install -y \
  build-essential \
  libvips-dev \
  python3

# Remove existing node_modules and package-lock.json if present
RUN rm -rf node_modules package-lock.json

# Install npm and dependencies
RUN npm install -g npm@6

# Install necessary global Nuxt modules
RUN npm install -g nuxt @nuxt/kit @nuxt/bridge

# Install @nuxtjs/i18n and typescript
RUN npm install @nuxtjs/i18n typescript --save

RUN npm install

# Install other necessary dev dependencies
RUN npm i -D @iconify-json/lineicons

# Copy the rest of the application code to the working directory
COPY . .

# Expose the frontend service port
EXPOSE 3000

# Start the application using the start script defined in package.json
CMD ["npm", "run", "dev"]
