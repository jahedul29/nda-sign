import React from 'react'
import './style.css';

const FormInput = ({label, type, placeholder, onChange}) => {
  return (
    <div className='form-input form-group'>
        <label>{label}</label>
        <input 
          type={type} 
          className='form-control' 
          placeholder={placeholder} 
          onChange={onChange} 
        />
    </div>
  )
}

export default FormInput