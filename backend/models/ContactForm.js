const mongoose = require('mongoose');
const ContactFormSchema = new mongoose.Schema({
  name : String,
  email : String,
  phone : String,
  job_needed : String,
  budget : String,
  deposit_file : String,
  description : String,
});
module.exports = mongoose.model('Portfolio', ContactFormSchema);