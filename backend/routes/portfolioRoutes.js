const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const router = express.Router();
const AWS = require('aws-sdk');
const { getAllPortfolios, getPortfolioById, updatePortfolio, createPortfolio, deletePortfolio } = require('../controllers/portfolioController');

// Configure the S3 client
const spacesEndpoint = new AWS.Endpoint('https://tor1.digitaloceanspaces.com');

const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
  region: 'us-east-1',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

// const upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//       const filetypes = /jpeg|jpg|png/; // Allowed file types
//       const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//       const mimetype = filetypes.test(file.mimetype);
//       if (mimetype && extname) {
//         return cb(null, true); // Accept the file
//       }
//       cb(new Error('Invalid file type, only JPEG and PNG are allowed'));
//     }
//   });

// Use multer-s3 to directly upload files to S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'imagery', // Replace with your bucket name
    acl: 'public-read', // Access control level, adjust as needed
    key: function (req, file, cb) {
      cb(null, `uploads/${file.originalname}`); // Store files under the 'uploads' directory
    }
  }),
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/; // Allowed file types
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true); // Accept the file
    }
    cb(new Error('Invalid file type, only JPEG and PNG are allowed'));
  }
});

// Define routes
router.get('/all', getAllPortfolios); // Route to get all portfolios
router.get('/:id', getPortfolioById); 

router.get('/portfolio/all', getAllPortfolios);
router.get('/portfolio/:id', getPortfolioById);
router.put('/portfolio/:id', updatePortfolio);
router.post('/portfolio', createPortfolio);
// router.post('/', upload.single('file'), createPortfolio); // Handle file uploads
router.delete('/portfolio/:id', deletePortfolio);

module.exports = router;
