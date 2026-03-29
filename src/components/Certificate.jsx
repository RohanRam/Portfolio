// import React from 'react'
// import hack from '../assets/hackerrank.png'
// import micro from '../assets/microsoft.png'
// import nactet from '../assets/nactet.webp'
// import illi from '../assets/favicon.ico'


// function Certificate() {
//     return (
//         <>
//             <div className="education-section mt-4">
//                 <h3>Cerificates</h3>

//                 <div className="exp-card mt-4" >
//                     <div className="cer-icon4">
//                         <img src={illi} className="exp-logo" />
//                     </div>
//                     <div className="exp-content">
//                         <h3>Ordered Data Structures</h3>
//                         <p>University of Illinois</p>
//                     </div>
//                     <div className="exp-date">Sep 2025 </div>
//                 </div>

//                 <div className="exp-card mt-4" >
//                     <div className="cer-icon3">
//                         <img src={nactet} className="exp-logo" />
//                     </div>
//                     <div className="exp-content">
//                         <h3>MERN Full Stack</h3>
//                         <p>NACTET</p>
//                     </div>
//                     <div className="exp-date">Feb 2025 </div>
//                 </div>
//                 <div className="exp-card mt-4" >
//                     <div className="cer-icon">
//                         <img src={hack} className="exp-logo" />
//                     </div>
//                     <div className="exp-content">
//                         <h3>Frontend Developer </h3>
//                         <p>HackerRank</p>
//                     </div>
//                     <div className="exp-date"> Feb 2025  </div>
//                 </div>

                

//                 <div className="exp-card mt-4" >
//                     <div className="cer-icon2">
//                         <img src={micro} className="exp-logo" />
//                     </div>
//                     <div className="exp-content">
//                         <h3>Software
//                             Development</h3>
//                         <p>Microsoft & Linkedin</p>
//                     </div>
//                     <div className="exp-date">May 2024 </div>
//                 </div>

                
//             </div>

//         </>
//     )
// }

// export default Certificate

import React from 'react'
import hack from '../assets/hackerrank.png'
import micro from '../assets/microsoft.png'
import nactet from '../assets/nactet.webp'
import illi from '../assets/favicon.ico'
import delo from '../assets/deloitte.png'
import delo2 from '../assets/deloitte2.png'
 
// ── Add new certificates at the BOTTOM of this array ──
// The list automatically displays newest (last) entry first.
const certificates = [
    {
        id: 1,
        title: 'Software Development',
        issuer: 'Microsoft & LinkedIn',
        date: 'May 2024',
        icon: micro,
        color: '#534AB7',
        bg: '#EEEDFE',
    },
    {
        id: 2,
        title: 'Frontend Developer',
        issuer: 'HackerRank',
        date: 'Feb 2025',
        icon: hack,
        color: '#1ee9a5',
        bg: '#EAF3DE',
    },
    {
        id: 3,
        title: 'MERN Full Stack',
        issuer: 'NACTET',
        date: 'Feb 2025',
        icon: nactet,
        color: '#BA7517',
        bg: '#FAEEDA',
    },
    {
        id: 4,
        title: 'Ordered Data Structures',
        issuer: 'University of Illinois',
        date: 'Sep 2025',
        icon: illi,
        color: '#378ADD',
        bg: '#E6F1FB',
    },
    {
        id: 5,
        title: 'Deloitte Australia Technology Simulation',
        issuer: 'Forage',
        date: 'Mar 2026',
        icon: delo2,
        color: '#26890D',
        bg: '#f3eded',
    },
    // ← add your next certificate here
]
 
const displayed = [...certificates].reverse()
 
function Certificate() {
    return (
        <div className="education-section mt-4">
            <h3>Certificates</h3>
 
            <div className="timeline-container mt-4">
                {displayed.map((cert, index) => (
                    <div className="timeline-item" key={cert.id}>
 
                        {/* Left: dot + vertical line */}
                        <div className="timeline-track">
                            <div
                                className="timeline-dot"
                                style={{
                                    borderColor: cert.color,
                                    boxShadow: `0 0 0 3px ${cert.bg}`,
                                }}
                            >
                                <div
                                    className="timeline-dot-inner"
                                    style={{ background: cert.color }}
                                />
                            </div>
                            {index < displayed.length - 1 && (
                                <div className="timeline-line" />
                            )}
                        </div>
 
                        {/* Right: card */}
                        <div className="timeline-card">
                            <div
                                className="timeline-icon-wrap"
                                style={{ background: cert.bg }}
                            >
                                <img src={cert.icon} alt={cert.issuer} className="timeline-icon-img" />
                            </div>
                            <div className="timeline-info">
                                <h4 className="timeline-title">{cert.title}</h4>
                                <p className="timeline-issuer">{cert.issuer}</p>
                            </div>
                            <span
                                className="timeline-date"
                                style={{ color: cert.color, background: cert.bg }}
                            >
                                {cert.date}
                            </span>
                        </div>
 
                    </div>
                ))}
            </div>
        </div>
    )
}
 
export default Certificate