import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    fitnessLevel: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("YOUR_EMAIL_API_ENDPOINT", formData).then((response) => {
      console.log(response.data);
    });
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      fitnessLevel: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div className='form-field'>
        <label htmlFor='fullName'>שם מלא</label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-field'>
        <label htmlFor='email'>כתובת מייל</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-field'>
        <label htmlFor='phoneNumber'>מספר טלפון</label>
        <input
          type='tel'
          id='phoneNumber'
          name='phoneNumber'
          pattern='[\d-]*'
          input='numeric'
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-field'>
        <label htmlFor='fitnessLevel'>רמת כושר</label>
        <select
          id='fitnessLevel'
          name='fitnessLevel'
          value={formData.fitnessLevel}
          onChange={handleChange}
          required
        >
          <option value=''>בחר רמת כושר</option>
          <option value='מתחיל'>מתחיל</option>
          <option value='בינוני'>בינוני</option>
          <option value='מתקדם'>מתקדם</option>
        </select>
      </div>
      <button type='submit'>שלח</button>
    </form>
  );
};

export default SignupForm;
