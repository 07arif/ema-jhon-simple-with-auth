import React, { useContext, useState } from 'react';
import '../LogIn/Login.css'
import './SignupError.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const SignUp = () => {
    const [error,setError]= useState(null);
    const {createUser}=useContext(AuthContext)


    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email,password,confirm)
        form.reset()

        if(password.length<6){
            setError('Your Password Should be 6 character')
            return;
        }

        if(password !== confirm){
            setError('Your Password did not match')
            return;
        }

        createUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch((error)=>{
            console.error(error)
        })

    }
    return (
        <div className='form-container'>
            <h4 className='form-title'>SignUp</h4>
            <form onSubmit={handleSubmit}>
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
            <span><p className='text-error'>{error}</p></span>
        </div>
    );
};

export default SignUp;