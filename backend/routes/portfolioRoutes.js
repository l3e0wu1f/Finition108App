const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const router = express.Router();
const S3 = require('aws-sdk/clients/s3');
const { getAllPortfolios, getPortfolioById, updatePortfolio, createPortfolio, deletePortfolio } = require('../controllers/portfolioController');

// https://medium.com/swlh/how-to-upload-image-using-multer-in-node-js-f3aeffb90657
// var storage = multer.diskStorage({ 
//   destination: function (req, file, cb) {
//       cb(null, '../tempDir/')
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.originalname)
//   }
// });

// Configure the S3 client
const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'tor1'
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

router.get('/all', getAllPortfolios);
router.get('/:id', getPortfolioById);
router.put('/:id', updatePortfolio);
// router.post('/portfolio', createPortfolio);
router.post('/', upload.single('file'), createPortfolio); // Handle file uploads
router.delete('/:id', deletePortfolio);

module.exports = router;
