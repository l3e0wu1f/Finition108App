const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const multer = require('multer');
const multerS3 = require('multer-s3');
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactFormRoutes = require('./routes/contactFormRoutes');
// import individual service
const AWS = require('aws-sdk');

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

// Configure the S3 client
const spacesEndpoint = new AWS.Endpoint('https://tor1.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
  region: 'us-east-1', // Ensure the region is correctly set
  s3ForcePathStyle: true, // Required for DigitalOcean Spaces
  signatureVersion: 'v4',
});

const params = {
  Bucket: 'imagery',
  Prefix: `uploads/`, // Prefix to list objects within the directory
};

const listKeys = async (bucketName, prefix) => {
  const params = {
    Bucket: bucketName,
    Prefix: prefix,
  };

  try {
    console.log(`Listing objects with Bucket: ${bucketName}, Prefix: ${prefix}`);
    const data = await s3.listObjectsV2(params).promise();
    console.log('Keys:', data.Contents.map(obj => obj.Key));
  } catch (error) {
    console.error('Error listing objects:', error);
  }
};

console.log('Listing images from uploads:');
listKeys('imagery', 'uploads/');
console.log('Listing contents from bucket root:');
listKeys('imagery', '');


// Middleware for file uploads using multer-s3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'imagery',
    acl: 'public-read', // Adjust the ACL as needed
    key: (req, file, cb) => {
      const filePath = `uploads/${file.originalname}`;
      cb(null, filePath);
    }
  })
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
});

// Route for uploading to S3
app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.originalname;
  const params = {
    Bucket: 'imagery',
    Key: `uploads/${filePath}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
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


app.use('/', portfolioRoutes);
app.use('/', contactFormRoutes);


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


