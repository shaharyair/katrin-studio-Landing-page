import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // setFormData({
    //   fullName: "",
    //   phoneNumber: "",
    // });
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div className='form-field'>
        <input
          type='text'
          id='fullName'
          name='fullName'
          placeholder='שם מלא'
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-field'>
        <input
          type='tel'
          id='phoneNumber'
          name='phoneNumber'
          placeholder='מספר טלפון'
          pattern='[\d-]*'
          input='numeric'
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <button type='submit'>שלח</button>
    </form>
  );
};

export default SignupForm;
