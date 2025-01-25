const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formdata', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create a schema and model
const formDataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  gender: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const newFormData = new FormData(req.body);

  newFormData.save()
    .then(() => res.status(200).json({ message: 'Form data saved successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});