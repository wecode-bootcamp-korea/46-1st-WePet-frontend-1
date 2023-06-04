import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import './ImgCarousel.scss'

// const ImgCarousel = () => {
//   const [data, setData] = useState()
//   const [Carousel, setCarousel] = useState(0)

//   const activeCarousel = () => {
//     productMainImg()
//   }

  useEffect(() => {
    fetch('/data/productData.json')
      .then(response => response.json())
      .then(result => setData(result))
  }, [])

  if (!data || !data.productImg || data.productImg.length === 0) {
    return null
  }

  return (
    <div className="productMainImg">
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="xl"
        className="arrowLeft"
        // onClick={() => {}}
      />
      <img className="mainImg" src={data.productImg[0]} alt="productImage" />
      <img className="mainImg" src={data.productImg[1]} alt="productImage" />
      <FontAwesomeIcon icon={faChevronRight} size="xl" className="arrowRight" />
    </div>
  )
}

export default ImgCarousel
