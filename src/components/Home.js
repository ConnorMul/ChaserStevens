import React from 'react'
import '../styles/Home.css'
import { CSSTransition } from 'react-transition-group'

export default function Home({ onLogoClick }) {
    return (
        // <CSSTransition  timeout={400} classNames="fade" unmountOnExit>
        <div className="home-container">
            <div className="spinning-circle">
                <div className="inner-circle">
                    <div className="top-level">
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                    </div>
                    <div className="middle-level">
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                    </div>
                    <div className="bottom-level">
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img onClick={() => onLogoClick()}src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                    </div>
                </div>
            </div>
        </div>
        // </CSSTransition>
    )
}

