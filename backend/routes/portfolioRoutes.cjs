const express = require('express');
const multer = require('multer');
const router = express.Router();
const { getAllPortfolios, getPortfolioById, updatePortfolio, createPortfolio, deletePortfolio } = require('../controllers/portfolioController');

//https://medium.com/swlh/how-to-upload-image-using-multer-in-node-js-f3aeffb90657

var storage = multer.diskStorage({ 
  destination: function (req, file, cb) {
      cb(null, '../tempDir/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
});

const upload = multer({
    storage: storage,
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

// const cpUpload = upload.fields([{ name: 'cover', maxCount: 1 }, { name: 'gallery', maxCount: 100 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) { ... })

router.get('/portfolio/all', getAllPortfolios);
router.get('/portfolio/:id', getPortfolioById);
router.put('/portfolio/:id', updatePortfolio);
router.post('/portfolio', createPortfolio);
router.delete('/portfolio/:id', deletePortfolio);

module.exports = router;
