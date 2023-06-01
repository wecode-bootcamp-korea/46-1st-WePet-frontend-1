import React, { useEffect, useState } from 'react'
import CarouselContent from './components/CarouselContent'
import Arrows from './components/Arrows'
import Dots from './components/Dots'
import { IMAGE_INFO_LIST } from './IMAGE_INFO_LIST'
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
        imageSlider={IMAGE_INFO_LIST}
        setActiveCarousel={setActiveCarousel}
      />
    </div>
  )
}

export default Carousel
