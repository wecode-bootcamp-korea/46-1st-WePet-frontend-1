import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import './ImgCarousel.scss'

const ImgCarousel = () => {
  const [data, setData] = useState(null)
  const [carousel, setCarousel] = useState(false)

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
      <div className={carousel ? 'imgBox' : 'imgBoxCarousel'}>
        <img className="mainImg" src={data.productImg[0]} alt="productImage" />
        <img className="mainImg" src={data.productImg[1]} alt="productImage" />
      </div>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="xl"
        className="arrowLeft"
        onClick={() => {
          setCarousel(!carousel)
        }}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        size="xl"
        className="arrowRight"
        onClick={() => {
          setCarousel(!carousel)
        }}
      />
    </div>
  )
}

export default ImgCarousel
