const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');

// Route to handle form submissions
router.post('/submit', (req, res) => {
  const newFormData = new FormData(req.body);

  newFormData.save()
    .then(() => res.status(200).json({ message: 'Form data saved successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;