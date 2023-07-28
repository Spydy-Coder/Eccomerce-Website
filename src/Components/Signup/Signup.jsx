import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here (e.g., send data to the server)
    console.log('Email:', email);
    console.log('Gender:', gender);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <form className='Sform'>
        <h3 id='sh'>Sign up to never miss updates</h3>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEAmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="form-text">
            <h6 id='sh2'>by clicking sign up</h6>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox1"
              value="Man"
              checked={gender === 'Man'}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              <h5 className='sh3'>Man</h5>
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox2"
              value="Woman"
              checked={gender === 'Woman'}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              <h5 className='sh3'>Woman</h5>
            </label>
          </div>
        </div>
        <button type="button" className="btn btn-outline-light" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
