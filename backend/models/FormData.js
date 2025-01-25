const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;