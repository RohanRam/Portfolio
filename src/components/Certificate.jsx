import React from 'react'
import hack from '../assets/hackerrank.png'
import micro from '../assets/microsoft.png'
import nactet from '../assets/nactet.webp'

function Certificate() {
    return (
        <>
            <div className="education-section mt-4">
                <h3>Cerificates</h3>
                <div className="exp-card mt-4" >
                    <div className="cer-icon3">
                        <img src={nactet} className="exp-logo" />
                    </div>
                    <div className="exp-content">
                        <h3>MERN Full Stack</h3>
                        <p>NACTET</p>
                    </div>
                    <div className="exp-date">Feb 2025 </div>
                </div>
                <div className="exp-card mt-4" >
                    <div className="cer-icon">
                        <img src={hack} className="exp-logo" />
                    </div>
                    <div className="exp-content">
                        <h3>Frontend Developer </h3>
                        <p>HackerRank</p>
                    </div>
                    <div className="exp-date"> Feb 2025  </div>
                </div>

                <div className="exp-card mt-4" >
                    <div className="cer-icon2">
                        <img src={micro} className="exp-logo" />
                    </div>
                    <div className="exp-content">
                        <h3>Software
                            Development</h3>
                        <p>Microsoft & Linkedin</p>
                    </div>
                    <div className="exp-date">May 2024 </div>
                </div>

                
            </div>

        </>
    )
}

export default Certificate