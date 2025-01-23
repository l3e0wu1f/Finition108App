const mongoose = require('mongoose');
const PortfolioSchema = new mongoose.Schema({
  title: String,
  city: String,
  imageUrl: String,
  credit_architect: String,
  credit: String
  // d'autres champs selon vos besoins
});
module.exports = mongoose.model('Portfolio', PortfolioSchema);