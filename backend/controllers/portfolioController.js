const fs = require('fs');
const path = require('path');
const S3 = require('aws-sdk/clients/s3');
const { LOCAL_PATH } = require('../env.js');

// Configure the S3 client
const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'tor1'
});

// Path to the portfolio.json file
const portfolioFilePath = LOCAL_PATH + '/utils/portfolioList.json';
const uploadsPath = LOCAL_PATH + '/public/uploads';

// Helper function to get the list of files in a directory
const getFilesFromDirectory = (dirPath) => {
  return fs.readdirSync(dirPath).filter(file => {
    // Only return image files (you can expand this based on your needs)
    return file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg');
  });
};

// 1. Get all portfolios with one image per portfolio
exports.getAllPortfolios = (req, res) => { 
  try {
    const portfolios = JSON.parse(fs.readFileSync(portfolioFilePath, 'utf-8'));
    const portfoliosWithImages = portfolios.map(portfolio => {
      const portfolioDir = path.join(uploadsPath, portfolio.filepath, '/cover');
      const primaryImg = getFilesFromDirectory(portfolioDir + '/primary');
      const hoverImg = getFilesFromDirectory(portfolioDir + '/hover');
      
      // Generate S3 URLs for the images
      const primaryUrl = primaryImg.length > 0 ? s3.getSignedUrl('getObject', {
        Bucket: 'imagery',
        Key: `uploads/${portfolio.filepath}/cover/primary/${primaryImg}`,
        Expires: 60
      }) : null;
      const hoverUrl = hoverImg.length > 0 ? s3.getSignedUrl('getObject', {
        Bucket: 'imagery',
        Key: `uploads/${portfolio.filepath}/cover/hover/${hoverImg}`,
        Expires: 60
      }) : null;

      // Include only the first image for the portfolio
      return { 
        ...portfolio, 
        primary: primaryUrl,
        hover: hoverUrl
      };
    });

    res.status(200).json({ portfolios: portfoliosWithImages });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolios', error });
  }
};

exports.getPortfolioById = (req, res) => { 
  const { id } = req.params;

  try {
    const portfolios = JSON.parse(fs.readFileSync(portfolioFilePath, 'utf-8'));
    const portfolio = portfolios.find(p => p.filepath === id);

    if (portfolio) {
      const portfolioDir = path.join(uploadsPath, portfolio.filepath);
      const images = getFilesFromDirectory(portfolioDir);
      
      // Generate S3 URLs for the images
      const imageUrls = images.map(image => s3.getSignedUrl('getObject', {
        Bucket: 'imagery',
        Key: `uploads/${portfolio.filepath}/${image}`,
        Expires: 60
      }));

      // Include all images in the directory
      res.status(200).json({ 
        portfolio,
        images: imageUrls 
      });
    } else {
      res.status(404).json({ message: 'Portfolio not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio', error });
  }
};

exports.updatePortfolio = (req, res) => { 
  res.status(200).json({ message: 'Update soumis avec succès' });
};

exports.createPortfolio = (req, res) => { 
  res.status(200).json({ message: 'Create soumis avec succès' });
};

exports.deletePortfolio = (req, res) => { 
  res.status(200).json({ message: 'Delete soumis avec succès' });
};
