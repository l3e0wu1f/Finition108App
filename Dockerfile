# Step 1: Use an official Node.js image as a base
FROM node:20

ENV npm_config_platform=linux
# Step 2: Set the working directory
WORKDIR /app
RUN npm cache clean --force
RUN npm install -g npm@6

# Step 3: Copy both frontend and backend code into the container
COPY ./frontend /app/frontend
COPY ./backend /app/backend

# Step 4: Install dependencies for both frontend and backend
WORKDIR /app/frontend
COPY package*.json ./
RUN apt-get update && apt-get install -y \
  build-essential \
  libvips-dev \
  python3
RUN rm -rf node_modules package-lock.json
RUN npm install
COPY . .

WORKDIR /app/backend
COPY package*.json ./
RUN apt-get update && apt-get install -y \
  build-essential \
  libvips-dev \
  python3
RUN rm -rf node_modules package-lock.json
RUN npm install
COPY . .


# Step 5: Expose both frontend and backend ports (example)
EXPOSE 3000 3001

# Step 6: Set up the command to run both frontend and backend
# Install supervisor to manage both processes
RUN apt-get update && apt-get install -y supervisor

# Add supervisor configuration file to manage both frontend and backend
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Start the processes using supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
# CMD ["sh", "-c", "npm run dev --prefix /app/frontend & npm start --prefix /app/backend"]
