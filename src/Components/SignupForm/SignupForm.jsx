import React, { useState } from "react";
import axios from "axios";
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

  const [submitStatus, setSubmitStatus] = useState(null);

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/send-email", formData);
      setSubmitStatus("resolved");
      setFormData({
        fullName: "",
        phoneNumber: "",
      });
    } catch (error) {
      setSubmitStatus("rejected");
      console.log(error);
    }
  };

  return (
    <>
      {submitStatus === "resolved" && (
        <div className='form-submit-message'>
          <h1>הודעה נשלחה בהצלחה!</h1>
          <button onClick={() => setSubmitStatus(null)}>סגור</button>
        </div>
      )}
      {submitStatus === "rejected" && (
        <div className='form-submit-message'>
          <h1>קרתה תקלה, נסו שוב מאוחר יותר.</h1>
          <button onClick={() => setSubmitStatus(null)}>סגור</button>
        </div>
      )}
      <div className='form-box'>
        <h1>הגיע הזמן לדאוג לעצמך!</h1>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='form-field'>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='מספר טלפון'
              pattern='^[0-9-]{10,}$'
              input='numeric'
              title='מספר הטלפון צריך לכלול רק מספרים ומינימום של 10 ספרות.'
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-field'>
            <input
              type='text'
              id='fullName'
              name='fullName'
              placeholder='שם מלא'
              pattern='^[a-zA-Z א-ת]+$'
              title='שם מלא צריך לכלול רק אותיות בעברית או באנגלית.'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit'>שלח</button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
