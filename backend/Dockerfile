FROM node:16

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Install Multer for S3 storage
RUN npm install multer multer-s3

# Copy the rest of the application code to the working directory
COPY . .

# Expose the backend service port
EXPOSE 4000

# Start the application using the start script defined in package.json
CMD ["npm", "start"]
