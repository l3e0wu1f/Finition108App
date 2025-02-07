FROM node:20

ENV npm_config_platform=linux
ENV NODE_ENV=production

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
RUN npm install

# Install necessary global Nuxt modules
# RUN npm install -g nuxt @nuxt/kit @nuxt/bridge typescript

# Install other necessary dev dependencies
# RUN npm i -D @iconify-json/lineicons

# Copy the rest of the application code to the working directory
COPY . .

# Expose the frontend service port
EXPOSE 3000

RUN npm run build

# Start the application using the start script defined in package.json
CMD ["npm", "run", "start"]
