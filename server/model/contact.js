const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    message: String,
    phone: String,
  });

module.exports = mongoose.model("Contact", contactSchema);