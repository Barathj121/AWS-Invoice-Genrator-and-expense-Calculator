import React from 'react';

const Log = () => {
  return (
    <div className='login-page'>
      <div className='login-box'>
        <div className='header'>Login</div>
        <form action='https://invoiceforms-dbpush.onrender.com/login' method='POST'>
          <div className='description'>Welcome back!</div>
          <label className='input-labels'>User ID</label>
          <br />
          <input
            className='input-boxes'
            type='email'
            name='user_id'
            placeholder='example: abcd@efgh.com'
            required
          />
          <br />
          <label className='input-labels'>Password</label>
          <br />
          <input
            className='input-boxes'
            type='password'
            name='password'
            placeholder='********'
            required
          />
          <br />
          <label className='input-labels'>Role</label>
          <br />
          <select className='input-boxes' name='role' required>
            <option value=''>Select Role</option>
            <option value='admin'>Finance Dept. Member</option>
            <option value='user'>Employee</option>
          </select>
          <br />
          <input className='submit-button' type='submit' value='Submit' />
          <div className='register-link'>
            Not yet registered? <a href='/register'>Register here</a>
          </div>
          <br/>
          {/* <hr />
          <label className='google-label'>Google Sign in</label>
          <br />
          <button className='google-button'>
            <img src='src/img/images.jpeg' alt='' /> Sign in
          </button> */}
        </form>
      </div>
      <div className='art-div'></div>
    </div>
  );
};

export default Log;
