FROM node:16

WORKDIR /app

ENV NODE_ENV=production
ENV AWS_ACCESS_KEY_ID=DO003NB89L7TREA74BHW
ENV AWS_SECRET_ACCESS_KEY=cTm4w/ahaYGQmqv65x7fVsKBY/DWnIOMT7zvuCRwBvE

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
