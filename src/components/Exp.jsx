import React from 'react'
import xtg from '../assets/xtg3.png'
import lum from '../assets/luminar.png'

function Exp() {
    return (
        <>
            <div className="experience-section">
                <h3>Experience</h3>
                <div className="experience">

                    <div className="exp-card mt-4" >
                        <div className="exp-icon">
                            <img src={lum} className="exp-logo" />
                        </div>
                        <div className="exp-content">
                            <h3>Luminar TechnoLab</h3>
                            <p>MEARN Stack Intern</p>
                        </div>
                        <div className="exp-date"> July 2024 - Present </div>
                    </div>


                    <div className="exp-card mt-4">
                        <div className="exp-icon2">
                            <img src={xtg} className="exp-logo" />
                        </div>
                        <div className="exp-content">
                            <h3>XTG Technologies</h3>
                            <p> Software Engineer Intern</p>
                        </div>
                        <div className="exp-date">May 2024 - Dec 2024 </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exp