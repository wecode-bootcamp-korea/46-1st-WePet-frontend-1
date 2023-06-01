import React from 'react'
import '../styles/Dots.scss'

const Dots = ({ activeCarousel, setActiveCarousel, imageSlider }) => {
  return (
    <div className="allDots">
      {imageSlider.map((slide, index) => {
        return (
          <span
            key={index}
            className={activeCarousel === index ? 'activeDot dot' : 'dot'}
            onClick={() => setActiveCarousel(index)}
          />
        )
      })}
    </div>
  )
}

export default Dots
