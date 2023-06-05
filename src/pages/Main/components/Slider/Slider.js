import React, { useState } from 'react'
import SliderContent from './components/SliderContent'
import Arrows from '../Carousel/components/Arrows'
import './Slider.scss'

const Slider = ({ productData }) => {
  const lastIndex = productData.length - 1
  const [firstSlide, setFirstSlide] = useState(0)
  return (
    <div className="sliderContainer">
      <SliderContent firstSlide={firstSlide} productData={productData} />
      <Arrows
        prev={() =>
          setFirstSlide(firstSlide < 1 ? lastIndex - 3 : firstSlide - 4)
        }
        next={() =>
          setFirstSlide(firstSlide === lastIndex - 3 ? 0 : firstSlide + 4)
        }
      />
    </div>
  )
}

export default Slider
