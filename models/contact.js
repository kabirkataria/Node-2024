
const mongoose = require('mongoose');

// Define the schema for the contact collection
const contactSchema = new mongoose.Schema({
  email: String,
  query: String
});

// Create and export the Contact model based on the contactSchema
module.exports = mongoose.model('Contact', contactSchema);
