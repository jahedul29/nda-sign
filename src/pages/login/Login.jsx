import React from 'react'
import FormInput from '../../components/form/formInput/formInput';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form';
import { loginFormSchema, signupFormSchema } from '../../form-schema/authSchema';
import { yupResolver } from '@hookform/resolvers/yup'

export const Login = () => {

  const handleLogin = async data => {
    console.log({ data })
  }

  return (
    <div className='auth-container'>
      <div className="content">
        <h1>Sign the documents</h1>
        <div className='inner-content'>
          <h1>Welcome Back</h1>
          <Form
            resolver={yupResolver(loginFormSchema)}
            submitHandler={handleLogin}
          >
            <div className='input-container'>
              <FormInput name={'email'} label={"Email"} placeholder={"Enter email"} type={'text'} onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div className='input-container'>
              <FormInput name={'password'} label={"Password"} placeholder={"Password"} type={'password'} onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div  className="agree-terms">
              <label htmlFor='agree'>
                <input type='checkbox' name='agree' id='agree' /> <p>Remember me</p> 
              </label>
              <Link className="form-link" to="/forgot-password">Forgot password?</Link>
            </div>
            <div className='input-container'>
              <button type='submit' className='auth-button'>Sign Up</button>
            </div>
          </Form>
          <div className="already-have-account">
            <p>Dont have an account? <Link className="form-link" to="/signup">Sign up</Link></p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="auth-banner.png" alt="" />
      </div>
    </div>
  )
}
