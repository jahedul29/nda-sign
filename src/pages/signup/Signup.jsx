import React from 'react'
import './style.css';
import FormInput from '../../components/form/formInput/formInput';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className='auth-container'>
      <div className="content">
        <h1>Sign the documents</h1>
        <div className='inner-content'>
          <h1>Create your account</h1>
          <div className='input-container'>
            <FormInput label={"Name"} placeholder={"Enter your name"} type={'text'} onChange={(e) => console.log(e.target.value)}/>
          </div>
          <div className='input-container'>
            <FormInput label={"Email"} placeholder={"Enter email"} type={'text'} onChange={(e) => console.log(e.target.value)}/>
          </div>
          <div className='input-container'>
            <FormInput label={"Password"} placeholder={"Password"} type={'password'} onChange={(e) => console.log(e.target.value)}/>
          </div>
          <div className='input-container'>
            <FormInput label={"Confirm password"} placeholder={"Password"} type={'password'} onChange={(e) => console.log(e.target.value)}/>
          </div>
          <div className='input-container'>
           <button type='submit' className='auth-button'>Sign Up</button>
          </div>
          <div  className="agree-terms">
            <label htmlFor='agree'>
              <input type='checkbox' name='agree' id='agree' /> <p>I agree to all Term, Privacy Policy and Fees</p> 
            </label>
          </div>
          <div className="already-have-account">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="auth-banner.png" alt="" />
      </div>
    </div>
  )
}
