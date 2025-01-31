FROM node:16

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose the backend service port
EXPOSE 3001

# Start the application using the start script defined in package.json
CMD ["npm", "start"]
