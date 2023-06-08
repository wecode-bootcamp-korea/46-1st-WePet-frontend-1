import React, { useEffect, useState } from 'react'
import CarouselContent from './components/CarouselContent'
import Dots from './components/Dots'
import { IMAGE_INFO_LIST } from './carouselImageData'
import './Carousel.scss'

const Carousel = () => {
  const [activeCarousel, setActiveCarousel] = useState(0)
  useEffect(() => {
    const auto = setInterval(
      () =>
        setActiveCarousel(activeCarousel =>
          activeCarousel === lastIndex ? 0 : activeCarousel + 1
        ),
      5000
    )
    return () => {
      clearInterval(auto)
    }
  }, [])

  const lastIndex = IMAGE_INFO_LIST.length - 1

  return (
    <div className="carouselContainer">
      <CarouselContent
        activeCarousel={activeCarousel}
        imageSlider={IMAGE_INFO_LIST}
      />
      <span
        className="prev"
        onClick={() =>
          setActiveCarousel(activeCarousel < 1 ? lastIndex : activeCarousel - 1)
        }
      >
        &#10094;
      </span>
      <span
        className="next"
        onClick={() =>
          setActiveCarousel(
            activeCarousel === lastIndex ? 0 : activeCarousel + 1
          )
        }
      >
        &#10095;
      </span>
      <Dots
        activeCarousel={activeCarousel}
        imageSlider={IMAGE_INFO_LIST}
        setActiveCarousel={setActiveCarousel}
      />
    </div>
  )
}

export default Carousel
