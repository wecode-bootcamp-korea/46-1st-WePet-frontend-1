import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import './ImgCarousel.scss'

const ImgCarousel = imageData => {
  const [productData, setProductData] = useState({})
  const [isCarousel, setIsCarousel] = useState(false)

  useEffect(() => {
    fetch('http://10.58.52.236:8001/products/details/80')
      .then(response => response.json())
      .then(result => setProductData(result.data))
  }, [])

  if (
    !productData ||
    !productData?.productImage ||
    imageData?.productImage.length === 0
  ) {
    return null
  }

  return (
    <div className="imgCarousel">
      <div className={`imgBox ${isCarousel ? '' : 'carousel'}`}>
        <img
          className="mainImg"
          src={imageData.productImg[0]}
          alt="productImage"
        />
        <img
          className="mainImg"
          src={imageData.productImg[1]}
          alt="productImage"
        />
      </div>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="xl"
        className="arrowLeft"
        onClick={() => {
          setIsCarousel(!isCarousel)
        }}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        size="xl"
        className="arrowRight"
        onClick={() => {
          setIsCarousel(!isCarousel)
        }}
      />
    </div>
  )
}

export default ImgCarousel
