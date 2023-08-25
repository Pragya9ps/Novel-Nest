import React from 'react';
import { useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = ({ setLoginUser }) => {

  const { handleChange, handleSubmit, values, errors } = useForm(
    validate
  );
  const navigate = useNavigate()
  const login = () => {
    // const{ email, password} = values
    axios.post("http://localhost:9002/FormLogin", values)
    .then( res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
    })
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Login to get started from where you left.
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
    
        <button className='form-input-btn' type='submit' onClick={login}>
          Log in
        </button>
        <span className='form-input-login'>
          Do not have an account? Sign Up <a href='/Form'>here</a>
        </span>
      </form>
    </div>
  );
};

export default Login;