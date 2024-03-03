import React from 'react'
import './style.css';
import FormInput from '../../components/form/formInput/formInput';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form';
import { signupFormSchema } from '../../form-schema/authSchema';
import { yupResolver } from '@hookform/resolvers/yup'

export const Signup = () => {

  const handleSignup = async data => {
    console.log({ data })
  }

  return (
    <div className='auth-container'>
      <div className="content">
        <h1>Sign the documents</h1>
        <div className='inner-content'>
          <h1>Create your account</h1>
          <Form
            resolver={yupResolver(signupFormSchema)}
            submitHandler={handleSignup}
          >
            <div className='input-container'>
              <FormInput name={'name'} label={"Name"} placeholder={"Enter your name"} type={'text'} onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div className='input-container'>
              <FormInput name={'email'} label={"Email"} placeholder={"Enter email"} type={'text'} onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div className='input-container'>
              <FormInput name={'password'} label={"Password"} placeholder={"Password"} type={'password'} onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div className='input-container'>
              <FormInput name={'confirmPassword'} label={"Confirm password"} placeholder={"Password"} type={'password'} onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div  className="agree-terms">
              <label htmlFor='agree'>
                <input type='checkbox' name='agree' id='agree' /> <p>I agree to all Term, Privacy Policy and Fees</p> 
              </label>
            </div>
            <div className='input-container'>
              <button type='submit' className='auth-button'>Sign Up</button>
            </div>
          </Form>
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
