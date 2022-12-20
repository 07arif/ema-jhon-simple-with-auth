import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h4 className='form-title'>LogIn</h4>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" required></input>
                </div>
                 <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" required></input>
                </div>
                <input className='btn-submit' type='submit' value='Login'></input>
            </form>
            <p>New to Ema-jhon<Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;