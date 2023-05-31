import React from 'react'
import '../styles/Dots.scss'

const Dots = ({ activeCarousel, onClick, imageSlider }) => {
  return (
    <div className="allDots">
      {imageSlider.map((slide, index) => {
        return (
          <span
            key={index}
            className={activeCarousel === index ? 'activeDot dot' : 'dot'}
            onClick={() => onClick(index)}
          />
        )
      })}
    </div>
  )
}

export default Dots
