FROM node:18-slim

WORKDIR /app

ENV NODE_ENV=production

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --only=production
RUN npm install multer-s3

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose the backend service port
EXPOSE 3001

# Start the application using the start script defined in package.json
CMD ["npm", "start"]
