import React, { useState, useContext  } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation  from './LoginValidation';
import axios from 'axios'
//import { setToken } from './utils/token';
import AuthContext from './AuthContext';

export default function Login() {
  const[values,setValues] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();
  const [errors,setErrors] = useState({});
  const { login } = useContext(AuthContext);

  const handleInput=(event) => {
    setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    try {
        const res = await axios.post('http://localhost:8081/login', values);
        //localStorage.setItem('token', res.data.token);
        login(res.data.token);
        navigate('/home');
    } catch (err) {
        console.error(err);
        alert('Invalid credentials');
    }
};

  return (
   <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-In</h2>
          <form action="" onSubmit={handleSubmit}>
              <div className='mb-3'>
                  <label htmlFor="email">
                  <strong> Email </strong>
                  </label>
                    <input type="email" name="email" onChange={handleInput} placeholder='Enter Email' className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div> 
              <div className='mb-3'>
                  <label htmlFor="password">
                  <strong>  Password </strong>
                  </label>
                    <input type="password" name="password"  onChange={handleInput} placeholder='Enter Password' className='form-control rounded-0'  />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
              <button type='submit' className='btn btn-success w-100 rounded-0'>Log In </button>
              <p>You are agree to our terms and policies</p>
              <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
          </form>
      </div>
   </div>
  )
}
