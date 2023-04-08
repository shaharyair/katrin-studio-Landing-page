import React, { useState } from "react";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("medium");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Send form data to email here
    console.log({
      firstName,
      lastName,
      email,
      passwordStrength,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        First Name:
        <input
          type='text'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password Strength:
        <select
          value={passwordStrength}
          onChange={(event) => setPasswordStrength(event.target.value)}
        >
          <option value='weak'>Weak</option>
          <option value='medium'>Medium</option>
          <option value='strong'>Strong</option>
        </select>
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default SignupForm;
