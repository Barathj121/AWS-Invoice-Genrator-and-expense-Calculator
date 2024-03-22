import React, { useState } from 'react';

const Log = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      user_id: userId,
      password: password,
    };

    const response = await fetch('https://invoiceforms-dbpush.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      alert('Login successful');
    } else {
      alert('Error logging in');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-box'>
        <div className='header'>Login</div>
        <form onSubmit={handleSubmit}>
          <div className='description'>Welcome back!</div>
          <label className='input-labels'>User ID</label>
          <br />
          <input
            className='input-boxes'
            type='email'
            placeholder='example: abcd@efgh.com'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <br />
          <label className='input-labels'>Password</label>
          <br />
          <input
            className='input-boxes'
            type='password'
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input className='submit-button' type='submit' value='Submit' />
          <hr />
          <label className='google-label'>Google Sign in</label>
          <br />
          <button className='google-button'>
            <img src='src/img/images.jpeg' alt='' /> Sign in
          </button>
        </form>
      </div>
      <div className='art-div'></div>
    </div>
  );
};

export default Log;
