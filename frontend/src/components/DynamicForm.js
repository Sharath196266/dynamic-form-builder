import React, { useState } from 'react';
import { formSchema } from './formSchema';
import '../Form.css';

const DynamicForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    formSchema.fields.forEach(field => {
      if (field.validation?.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.type === 'number' && field.validation?.min && formData[field.name] < field.validation.min) {
        newErrors[field.name] = `${field.label} must be at least ${field.validation.min}`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{formSchema.title}</h1>
      {formSchema.fields.map((field, index) => (
        <div key={index} className="form-field">
          <label>{field.label}</label>
          {field.type === 'select' ? (
            <select name={field.name} onChange={handleChange}>
              <option value="">Select {field.label}</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          )}
          {errors[field.name] && <p style={{ color: 'red' }}>{errors[field.name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;