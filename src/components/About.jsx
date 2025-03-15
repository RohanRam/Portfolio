// import React, { useState, useEffect } from "react";

// const ScrambleText = ({ text, speed = 50, revealSpeed = 200 }) => {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const [scrambled, setScrambled] = useState(text.split("").map(() => " "));
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index > text.length) return; // Allow all letters to update properly

//     const interval = setInterval(() => {
//       setScrambled((prev) =>
//         prev.map((char, i) =>
//           i < index ? text[i] : chars[Math.floor(Math.random() * chars.length)]
//         )
//       );
//     }, speed);

//     const revealTimeout = setTimeout(() => {
//       setIndex((prev) => prev + 1);
//     }, revealSpeed);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(revealTimeout);
//     };
//   }, [index, text, speed, revealSpeed]);

//   return <h3 >{scrambled.join("")}</h3>;
// };

// function About() {
//   return (
//     <div className="about-section">
//       <ScrambleText text="About" />
//       <p>
//         I am Rohan Ram, a minimalist Web Designer & Developer. My expertise lies at the
//         intersection of visual design, technical implementation, and attention to detail.
//       </p>
//       <p>
//         I have contributed to building scalable applications, mentoring interns, and optimizing
//         system workflows. Constantly learning and adapting, I thrive on solving complex problems and
//         delivering high-quality solutions.
//       </p>
//     </div>
//   );
// }

// export default About;

import React from 'react'

function About() {
    return (
        <>
            <div className="about-section">
                <h3>About</h3>
                <p>I am Rohan Ram, a minimilist Web Designer & Developer. My expertise lies at  intersection of visual design , technical implementation and attention to detail.</p>
                <p> I have contributed to building scalable applications, mentoring interns, and optimizing system workflows. Constantly learning and adapting, I thrive on solving complex problems and delivering high-quality solutions.</p>
            </div>
        </>
    )
}

export default About