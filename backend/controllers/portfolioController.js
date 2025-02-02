const fs = require('fs');
const path = require('path');
const { LOCAL_PATH } = require('../env.js');

// Configure the S3 client
const AWS = require('aws-sdk');

const spacesEndpoint = new AWS.Endpoint('https://imagery.tor1.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
  region: 'us-east-1', // Ensure the region is correctly set
  s3ForcePathStyle: true, // Required for DigitalOcean Spaces
  signatureVersion: 'v4',
});

// Path to the portfolio.json file
const portfolioFilePath = path.join(LOCAL_PATH, 'utils/portfolioList.json');

// CDN upload path
const uploadsPath = 'https://imagery.tor1.cdn.digitaloceanspaces.com/uploads';
// const uploadsPath = path.join(LOCAL_PATH, 'public/uploads');

const getFilesFromS3Directory = async (dir) => {
  const params = {
    Bucket: 'imagery',
    Prefix: `uploads/`, // Prefix to list objects within the directory
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    return data.Contents.map(obj => obj.Key.replace(`uploads/`, ''));
  } catch (error) {
    console.error(`Error listing objects in S3 directory: uploads/`, error);
    return [];
  }
};


// 1. Get all portfolios with one image per portfolio
exports.getAllPortfolios = async (req, res) => { 
  try {
    // Read JSON file
    const portfolioFilePath = path.join(LOCAL_PATH, 'utils', 'portfolioList.json');
    const fileContent = fs.readFileSync(portfolioFilePath, 'utf-8');
    const portfolios = JSON.parse(fileContent);
    console.log('Portfolios fetched:', portfolios);

    const portfoliosWithImages = await Promise.all(portfolios.map(async (portfolio) => {
      const primaryImgs = await getFilesFromS3Directory(`${portfolio.filepath}/cover/primary`);
      const hoverImgs = await getFilesFromS3Directory(`${portfolio.filepath}/cover/hover`);

      const primaryUrl = primaryImgs.length > 0 ? `https://imagery.tor1.cdn.digitaloceanspaces.com/uploads/${portfolio.filepath}/cover/primary/${primaryImgs[0]}` : null;
      const hoverUrl = hoverImgs.length > 0 ? `https://imagery.tor1.cdn.digitaloceanspaces.com/uploads/${portfolio.filepath}/cover/hover/${hoverImgs[0]}` : null;

      return { 
        ...portfolio, 
        primary: primaryUrl,
        hover: hoverUrl
      };
    }));

    res.status(200).json({ portfolios: portfoliosWithImages });
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    res.status(500).json({ message: 'Error fetching portfolios', error: error.message });
  }
};

// 2. Get each portfolio by ID
exports.getPortfolioById = async (req, res) => {
  const { id } = req.params;

  try {
    const portfolioFilePath = path.join(LOCAL_PATH, 'utils', 'portfolioList.json');
    const portfolios = JSON.parse(fs.readFileSync(portfolioFilePath, 'utf-8'));
    const portfolio = portfolios.find(p => p.filepath === id);

    if (portfolio) {
      const images = await getFilesFromS3Directory(portfolio.filepath);
      const imageUrls = images.map(image => `https://imagery.tor1.cdn.digitaloceanspaces.com/uploads/${portfolio.filepath}/${image}`);
      // Include all images in the directory
      res.status(200).json({ 
        portfolio,
        images: imageUrls 
      });
    } else {
      res.status(404).json({ message: 'Portfolio not found' });
    }
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ message: 'Error fetching portfolio', error: error.message });
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

// // Helper function to get the list of files in a directory
// const getFilesFromDirectory = (dirPath) => {
//   return fs.readdirSync(dirPath).filter(file => {
//     // Only return image files (you can expand this based on your needs)
//     return file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg');
//   });
// };

// // 1. Get all portfolios with one image per portfolio
// exports.getAllPortfolios = (req, res) => { 
//   try {
//     const portfolios = JSON.parse(fs.readFileSync(portfolioFilePath, 'utf-8'));
//     const portfoliosWithImages = portfolios.map(portfolio => {
//       const portfolioDir = path.join(uploadsPath, portfolio.filepath, '/cover');
//       const primaryImg = getFilesFromDirectory(portfolioDir + '/primary');
//       const hoverImg = getFilesFromDirectory(portfolioDir + '/hover');
      
//       // Generate S3 URLs for the images
//       const primaryUrl = primaryImg.length > 0 ? s3.getSignedUrl('getObject', {
//         Bucket: 'imagery',
//         Key: `uploads/${portfolio.filepath}/cover/primary/${primaryImg}`,
//         Expires: 60
//       }) : null;
//       const hoverUrl = hoverImg.length > 0 ? s3.getSignedUrl('getObject', {
//         Bucket: 'imagery',
//         Key: `uploads/${portfolio.filepath}/cover/hover/${hoverImg}`,
//         Expires: 60
//       }) : null;

//       // Include only the first image for the portfolio
//       return { 
//         ...portfolio, 
//         primary: primaryUrl,
//         hover: hoverUrl
//       };
//     });

//     res.status(200).json({ portfolios: portfoliosWithImages });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching portfolios', error });
//   }
// };

// exports.getPortfolioById = (req, res) => { 
//   const { id } = req.params;

//   try {
//     const portfolios = JSON.parse(fs.readFileSync(portfolioFilePath, 'utf-8'));
//     const portfolio = portfolios.find(p => p.filepath === id);

//     if (portfolio) {
//       const portfolioDir = path.join(uploadsPath, portfolio.filepath);
//       const images = getFilesFromDirectory(portfolioDir);
      
//       // Generate S3 URLs for the images
//       const imageUrls = images.map(image => s3.getSignedUrl('getObject', {
//         Bucket: 'imagery',
//         Key: `uploads/${portfolio.filepath}/${image}`,
//         Expires: 60
//       }));

//       // Include all images in the directory
//       res.status(200).json({ 
//         portfolio,
//         images: imageUrls 
//       });
//     } else {
//       res.status(404).json({ message: 'Portfolio not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching portfolio', error });
//   }
// };

// exports.updatePortfolio = (req, res) => { 
//   res.status(200).json({ message: 'Update soumis avec succès' });
// };

// exports.createPortfolio = (req, res) => { 
//   res.status(200).json({ message: 'Create soumis avec succès' });
// };

// exports.deletePortfolio = (req, res) => { 
//   res.status(200).json({ message: 'Delete soumis avec succès' });
// };
