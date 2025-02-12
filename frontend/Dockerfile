# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Clean npm cache and install necessary build tools
RUN npm cache clean --force
RUN apt-get update && apt-get install -y \
  build-essential \
  libvips-dev \
  python3

# Copy the rest of the source code
RUN npm install
COPY . .

# Build Nuxt3 app
RUN npx nuxi build

# List the contents of .output to verify build success
RUN ls -la .output
RUN ls -la .output/server

# Stage 2: Production
FROM node:18-slim

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.output ./.output

# Install only production dependencies if needed
COPY package*.json ./
RUN npm ci --only=production

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
