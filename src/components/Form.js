import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/map', { state: { firstName } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;