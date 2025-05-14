# Stage 1: Build
FROM node:18-slim

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Clean npm cache and install necessary build tools
# RUN npm cache clean --force
RUN apt-get update && apt-get install -y \
  git \
  build-essential \
  libvips-dev \
  python3

# Copy the rest of the source code
RUN npm install
RUN npm install nuxt@3.15.4

# Add dependency
RUN npm add -D unenv

COPY . .

# Build Nuxt3 app
RUN npx nuxi build

# Copy the node_modules from the base image (this is already installed and cached)
# COPY /app/node_modules ./node_modules

# Copy the built application from the base image
# COPY /app/.nuxt ./.nuxt
# COPY /app/.output ./.output

# Expose the frontend service port
EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
# ENTRYPOINT ["node", ".output/server/index.mjs"]
# CMD ["npm", "run", "start"]

# FROM node:18

# ENV npm_config_platform=linux
# ENV NODE_ENV=production

# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Clean npm cache and install necessary build tools
# RUN npm cache clean --force
# RUN apt-get update && apt-get install -y \
#   build-essential \
#   libvips-dev \
#   python3

# # Remove existing node_modules and package-lock.json if present
# RUN rm -rf node_modules package-lock.json

# # Install npm and dependencies
# RUN npm install -g npm@6
# RUN npm install --max-old-space-size=4096

# # Copy the rest of the application code to the working directory
# COPY . .

# RUN npx nuxi build


# # Ensure .output is available
# # COPY .output /app/.output

# Expose the frontend service port
# EXPOSE 3000

# Start the application using docker-compose command
# CMD ["npm", "run", "start"]
