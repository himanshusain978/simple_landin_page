const Contact = require("../model/contact");

exports.handleContact = async (req, res) => {
  const { firstName, lastName, message, phone } = req.body;
  const newContact = new Contact({ firstName, lastName, message, phone });

  try {
    await newContact.save();
    res.status(200).json({ message: 'Form data received and saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Failed to save form data' });
  }
};
