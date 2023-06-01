import React from 'react'
import './sliderContent.scss'

const SliderContent = ({ firstSlide, productData }) => {
  return (
    <div className="sliderContent">
      {productData
        .map((item, index) => {
          return (
            <div key={index} className="sliderItem">
              <img
                className="sliderImg"
                src={item.productImage}
                alt="productChoice"
              />
              <div className="sliderText">
                <p className="sliderName">{item.productName}</p>
                <p className="sliderPrice">{item.productPrice}</p>
              </div>
            </div>
          )
        })
        .slice(firstSlide, firstSlide + 3)}
    </div>
  )
}

export default SliderContent
