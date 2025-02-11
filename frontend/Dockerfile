FROM node:18

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
RUN npm install --max-old-space-size=4096

# Copy the rest of the application code to the working directory
COPY . .

RUN npx nuxi build


# Ensure .output is available
# COPY .output /app/.output

# Expose the frontend service port
EXPOSE 3000

# Start the application using docker-compose command
# CMD ["node", ".output/server/index.mjs"]
CMD ["npm", "run", "start"]
