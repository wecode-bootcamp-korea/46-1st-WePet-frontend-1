import React, { useState } from 'react'
import CarouselContent from './components/CarouselContent'
import Arrows from './components/Arrows'
import Dots from './components/Dots'
import { IMAGE_SLIDER } from './IMAGE_SLIDER'
import './Carousel.scss'

const Carousel = () => {
  const lastIndex = IMAGE_SLIDER.length - 1
  const [activeCarousel, setActiveCarousel] = useState(0)
  return (
    <div className="carouselContainer">
      <CarouselContent
        activeCarousel={activeCarousel}
        imageSlider={IMAGE_SLIDER}
      />
      <Arrows
        prev={() =>
          setActiveCarousel(activeCarousel < 1 ? lastIndex : activeCarousel - 1)
        }
        next={() =>
          setActiveCarousel(
            activeCarousel === lastIndex ? 0 : activeCarousel + 1
          )
        }
      />
      <Dots
        activeCarousel={activeCarousel}
        imageSlider={IMAGE_SLIDER}
        onClick={activeCarousel => setActiveCarousel(activeCarousel)}
      />
    </div>
  )
}

export default Carousel
