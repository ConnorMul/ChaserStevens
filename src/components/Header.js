import React from 'react';
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <div className='left-nav'>
                <NavLink className="navbar-links" id="about" to='/about'>About Me</NavLink>
                <NavLink className="navbar-links" id="art" to='/art'>Poems & Things</NavLink>
                <NavLink className="navbar-links" id="contact" to='/contact'>Contact</NavLink>
            </div>
            <div className='logo'>
                <NavLink className="navbar-links-header" id="header-logo" to='/'>Chaser Stevens</NavLink>
            </div>
            <div className="right-nav">
                <a className='navbar-links' id="twitter" href="https://www.twitter.com/chaserstevens">Twitter</a>
                <a className='navbar-links' id="facebook" href="https://www.facebook.com/chaserstevens">Facebook</a>
                <a className='navbar-links' id="insta" href="https://www.instagram.com/chaserelectric">Instagram</a>
            </div>
        </div>
    )
}