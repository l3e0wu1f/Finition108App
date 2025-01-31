const express = require('express');
const multer = require('multer');
const { submitContactForm } = require('../controllers/contactFormController');
const path = require('path');
const router = express.Router();

// Set up Multer memory storage to store files in memory instead of on disk
const storage = multer.memoryStorage();  // Store files in memory

// Set up Multer to handle file uploads
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|pdf/; // Allowed file types
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true); // Accept the file
    }
    cb(new Error('Invalid file type, only JPEG, PNG, and PDF are allowed'));
  }
});
// const upload = multer()

router.post('/contact-form', upload.array('deposit_file'), submitContactForm);

module.exports = router;
