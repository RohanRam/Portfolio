import React from 'react'
import { assts } from '../assets/assts'

function Tech() {
  return (
    <div className='tech-container mt-4'>
      <h3 className=''>Tech Stack</h3>

      <div className='tech-scroller-wrapper'>
        <div className="tech-scroller mt-5 mb-2 ">
          {Object.values(assts).map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`tech-${index}`}
              className='tech-icon'
            />
          ))}
          {/* Duplicate to create endless loop effect */}
          {Object.values(assts).map((imageSrc, index) => (
            <img
              key={`clone-${index}`}
              src={imageSrc}
              alt={`tech-${index}`}
              className='tech-icon'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tech
