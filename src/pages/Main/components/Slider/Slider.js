import React, { useState, useEffect } from 'react'
import SliderContent from './components/SliderContent'
import Arrows from '../Carousel/components/Arrows'
import { APIS } from '../../../../config'
import './Slider.scss'

const Slider = ({ data }) => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch(`${APIS.product}/category?id=${data}`)
      .then(response => response.json())
      .then(data => setProductData(data.data))
  }, [])

  const [firstSlide, setFirstSlide] = useState(0)

  const lastIndex = productData.length - 1
  return (
    productData.length > 0 && (
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
  )
}

export default Slider
