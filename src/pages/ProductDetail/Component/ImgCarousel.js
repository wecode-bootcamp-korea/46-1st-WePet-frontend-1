import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import './ImgCarousel.scss'

const ImgCarousel = ({ productData }) => {
  const [isCarousel, setIsCarousel] = useState(false)

  return (
    <div className="imgCarousel">
      <div className={`imgBox ${isCarousel ? '' : 'carousel'}`}>
        <img
          className="mainImg"
          src={productData.mainThumbnailImage}
          alt="productImage"
        />
        <img
          className="mainImg"
          src={productData.mainThumbnailImage}
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
