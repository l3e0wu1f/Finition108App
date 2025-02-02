const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactFormRoutes = require('./routes/contactFormRoutes');
// import individual service
const S3 = require('aws-sdk/clients/s3');

// Enable CORS for all routes
app.use(cors({
  origin: '*', // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow cookies to be sent with requests
}));

app.use(express.json());  // Pour parser le JSON

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Backend Service');
});

// Existing code to serve images from the local 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// Middleware to redirect /uploads requests to CDN
app.use('/uploads', (req, res) => {
  const url = `https://imagery.tor1.cdn.digitaloceanspaces.com/uploads${req.path}`;
  res.redirect(url);
});

// Configure the S3 client
const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'tor1'
});

// Serve images from S3, including sub-directories
// app.get('/uploads/*', (req, res) => {
//   const filePath = req.params[0]; // Capture the full file path from the URL

//   const params = {
//     Bucket: 'imagery',
//     Key: `uploads/${filePath}`, // Use the full file path including sub-directories
//     Expires: 60 // URL expiration time in seconds
//   };

//   const url = s3.getSignedUrl('getObject', params);
//   res.redirect(url);
// });

// Route for uploading to S3
app.post('/upload', (req, res) => {
  const params = {
    Bucket: 'imagery',
    Key: `uploads/${filePath}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype
  };
  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading object:', err);
      res.status(500).send('Error uploading object');
    } else {
      res.send(`Successfully uploaded object: ${data.Location}`);
    }
  });
});

app.get('/api', (req, res) => {
  console.log("Hello")
  res.json({ message: 'Hello from the back end!' });
});

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactFormRoutes);
// app.use('/api', portfolioRoutes); 
// app.use('/api', contactFormRoutes); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


