import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, Logout } = useContext(AuthContext)
    // console.log(user)


    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <>
                            <Link to="/inventory">Inventory</Link>
                            <button className='btn-logout' onClick={Logout}>Log out</button>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link>
                        </>
                }
                <Link to="/">{user?.email}</Link>
            </div>
        </nav>
    );
};

export default Header;