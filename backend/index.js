const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactFormRoutes = require('./routes/contactFormRoutes');
const AWS = require('aws-sdk'); // Adding support for s3 bucket

app.use(cors());

app.use(express.json());  // Pour parser le JSON

// Existing code to serve images from the local 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// Configure AWS SDK
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'tor1'
});

// Serve images from S3, including sub-directories
app.get('/uploads/*', (req, res) => {
  const filePath = req.params[0]; // Capture the full file path from the URL

  const params = {
    Bucket: 'imagery',
    Key: `uploads/${filePath}`, // Use the full file path including sub-directories
    Expires: 60 // URL expiration time in seconds
  };

  const url = s3.getSignedUrl('getObject', params);
  res.redirect(url);




app.get('/api', (req, res) => {
  console.log("Hello")
  res.json({ message: 'Hello from the back end!' });
});


app.use('/api', portfolioRoutes); 
app.use('/api', contactFormRoutes); 



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

