const mongoose = require('mongoose');
const PortfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  // d'autres champs selon vos besoins
});
module.exports = mongoose.model('Portfolio', PortfolioSchema);