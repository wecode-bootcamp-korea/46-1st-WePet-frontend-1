import React from 'react'
import '../styles/Arrows.scss'

const Arrows = ({ prev, next }) => {
  return (
    <div className="arrows">
      <span className="prev" onClick={prev}>
        &#10094;
      </span>
      <span className="next" onClick={next}>
        &#10095;
      </span>
    </div>
  )
}

export default Arrows
