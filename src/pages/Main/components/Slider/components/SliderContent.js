import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sliderContent.scss'

const SliderContent = ({ firstSlide, productData }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="sliderContent">
      {productData
        .map((item, index) => {
          return (
            <Link to={`products/${item.productId}`} key={item.id}>
              <div className="sliderItem">
                <img
                  className="sliderImg"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  src={
                    isHovered
                      ? item.mainThumbnailImage
                      : item.mainThumbnailImage2
                  }
                  alt="productChoice"
                />
                <div className="sliderText">
                  <p className="sliderName">{item.productName}</p>
                  <p className="sliderPrice">{item.productPrice}</p>
                </div>
              </div>
            </Link>
          )
        })
        .slice(firstSlide, firstSlide + 4)}
    </div>
  )
}

export default SliderContent
