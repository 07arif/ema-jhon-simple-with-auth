import React from 'react';
import '../LogIn/Login.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
        <h4 className='form-title'>SignUp</h4>
        <form>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" required></input>
            </div>
             <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" required></input>
            </div>
            <div className='form-control'>
                <label htmlFor='confirm'>Confirm Password</label>
                <input type="password" name="confirm" required></input>
            </div>
            <input className='btn-submit' type='submit' value='SignUp'></input>
        </form>
        <p>Already have an account?<span className='login-link'><Link to='/login'>Login</Link></span></p>
    </div>
    );
};

export default SignUp;