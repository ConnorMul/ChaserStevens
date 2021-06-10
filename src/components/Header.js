import React from 'react';
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function Header() {
    return (
        <div className="header">
            <div className='left-nav'>
                <NavLink className="navbar-links-left" id="about" to='/about'>about me</NavLink>
                <NavLink className="navbar-links-left" id="art" to='/art'>art</NavLink>
                <NavLink className="navbar-links-left" id="contact" to='/contact'>contact</NavLink>
            </div>
            <div className='logo'>
                <NavLink className="navbar-links-header" id="header-logo" to='/'>Chaser Stevens</NavLink>
            </div>
            <div className="right-nav">
                <SocialIcon className="social-icons" bgColor="transparent" fgColor="white" url="https://twitter.com/chaserstevens"/>
                <SocialIcon className="social-icons" bgColor="transparent" fgColor="white" url="https://instagram.com/chaserelectric"/>
                <SocialIcon className="social-icons" bgColor="transparent" fgColor="white" url="https://facebook.com/chaserstevens"/>
            </div>
        </div>
    )
}