import React from 'react';

const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup-box'>
          <div className="header">
            Sign up
          </div>
          <form action='https://invoiceforms-dbpush.onrender.com/signup' method='POST'>
            <label className='input-labels'>Name</label>
            <br/>
            <input className="input-boxes" type='text' placeholder='Name'></input>
            <br/>
            <label className='input-labels'>Register as (Role) :</label> 

            <br/>
            <select className='input-boxes' name='role' required>
            <option value=''>Select Role</option>
            <option value='admin'>Finance Dept. Member</option>
            <option value='user'>Employee</option>
            </select>
            <br/>
            <label className='input-labels' >E-mail id</label>
            <br/>
            <input className="input-boxes"  type='email' placeholder='example:abcd@efgh.com' ></input>
            <br/> 
            <label className='input-labels'>Password</label>
            <br/>
            <input className="input-boxes"type='password' placeholder='********'></input>
            <br/>
            <input className="submit-button" type="submit" value="Submit" />


          </form>
      </div>
      <div className='art-div'>

      </div>
    </div>
  );
};

export default Signup;
