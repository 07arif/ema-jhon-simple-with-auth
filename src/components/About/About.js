import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {
    const {user}= useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h2>Secret about us!!!</h2>
            <span>This is {user?.email}</span>
        </div>
    );
};

export default About;