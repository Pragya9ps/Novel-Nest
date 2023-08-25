import React, { useState } from 'react';
import '../../App.css';
import './Form.css';
import Login from './Login';
import Home from './Home';
import { useNavigate } from "react-router-dom";

const FormLogin = ({ setLoginUser }) => {
  
  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn'>×</span> */}
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        
        <Login setLoginUser = {setLoginUser} />
        
      </div>
    </>
  );
};

export default FormLogin;