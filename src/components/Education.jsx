import React from 'react'
import itm from '../assets/itm.png'
import jain from '../assets/jain.png'

function Education() {
    return (
        <>
            <div className="education-section mt-4">
                <h3>Education</h3>
                <div className="exp-card mt-4" >
                    <div className="edu-icon">
                        <img src={jain} className="exp-logo" />
                    </div>
                    <div className="exp-content">
                        <h3>JAIN (Deemed-to-be University) </h3>
                        <p>Postgraduate in MCA</p>
                    </div>
                    <div className="exp-date"> Aug 2025 - Present </div>
                </div>

                <div className="exp-card mt-4" >
                    <div className="edu-icon2">
                        <img src={itm} className="exp-logo" />
                    </div>
                    <div className="exp-content">
                        <h3>ITM College of Arts & Science </h3>
                        <p>Undergraduate in BCA</p>
                    </div>
                    <div className="exp-date"> July 2021 - Mar 2024 </div>
                </div>
            </div>

        </>
    )
}

export default Education