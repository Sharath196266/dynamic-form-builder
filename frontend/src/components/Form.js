import React, { useState } from 'react';
import axios from 'axios';
import '../Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/submit', formData)
      .then(response => {
        console.log(response.data.message);
        // Clear the form
        setFormData({ name: '', age: '', email: '', gender: '' });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;