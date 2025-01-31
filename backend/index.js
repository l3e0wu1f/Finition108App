import express from 'express';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import path from 'path'
import cors from 'cors'

// const express = require('express');
// const cors = require('cors');
// const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
// const portfolioRoutes = require('./routes/portfolioRoutes');
// const contactFormRoutes = require('./routes/contactFormRoutes');
import portfolioRoutes from './routes/portfolioRoutes.cjs';  
import contactFormRoutes from './routes/contactFormRoutes.cjs';  

app.use(cors());

app.use(express.json());  // Pour parser le JSON

// Existing code to serve images from the local 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// Configure the S3 client
const s3 = new S3Client({
  region: 'tor1',  // Use 'tor1' for the Toronto region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
});


// Example function to upload an object to S3
const uploadImage = async (file) => {
  const params = {
    Bucket: 'imagery',
    Key: `uploads/${filepath}`,
    Body: file.buffer,
    ContentType: file.mimetype
  };

  const command = new PutObjectCommand(params);
  try {
    const data = await s3.send(command);
    console.log("Successfully uploaded object:", data);
    return data;
  } catch (error) {
    console.error("Error uploading object:", error);
  }
};


app.get('/api', (req, res) => {
  console.log("Hello")
  res.json({ message: 'Hello from the back end!' });
});


app.use('/api', portfolioRoutes); 
app.use('/api', contactFormRoutes); 



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

