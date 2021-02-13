import React from 'react'
import './styles/nav.css';

const Nav = () => {
    return (
        <div className="navbar">
            <p className="brand"><span>My</span>Jobs</p>
            <a href="/login" className="login">Login/Signup</a>
        </div>
    )
}

export default Nav
