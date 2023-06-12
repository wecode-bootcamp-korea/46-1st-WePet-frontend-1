import React from 'react'
import { Link } from 'react-router-dom'
import './sliderContent.scss'

const SliderContent = ({ firstSlide, productData }) => {
  const displayProductData = productData.slice(0, 8)
  return (
    <div className="sliderContent">
      {displayProductData
        .map(item => {
          return (
            <Link
              to={`products/details/${item.productId}`}
              key={item.productId}
            >
              <div className="sliderItem">
                <img
                  className="sliderImg"
                  src={item.mainThumbnailImage}
                  alt="productChoice"
                />
                <div className="sliderText">
                  <p className="sliderName">{item.productName}</p>
                  <p className="sliderPrice">{`${parseFloat(
                    item.productPrice
                  ).toLocaleString()}원`}</p>
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
