import React from 'react'
import '../styles/CarouselContent.scss'

const CarouselContent = ({ activeCarousel, imageSlider }) => {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeCarousel ? 'active slides' : 'inactive'}
        >
          <img
            className="slideImage"
            src={slide.urls}
            alt={`${slide.id} product slide`}
          />
          <span className="slideTitle">{slide.title}</span>
          <span className="slideText">{slide.description}</span>
        </div>
      ))}
    </section>
  )
}

export default CarouselContent
