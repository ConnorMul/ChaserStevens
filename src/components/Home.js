import React from 'react'
import '../styles/Home.css'
// import chaser from '../../chaser-stevens-logo.png'

export default function Home() {
    return (
        <div className="home-container">
            <div className="spinning-circle">
                <div className="inner-circle">
                    <div className="top-level">
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                    </div>
                    <div className="middle-level">
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                    </div>
                    <div className="bottom-level">
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                        <img src="../../chaser-stevens-logo.png" alt="logo" className="main-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

