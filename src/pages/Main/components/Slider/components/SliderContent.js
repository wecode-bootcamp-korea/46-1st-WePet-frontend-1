import React from 'react'
import './sliderContent.scss'

const SliderContent = ({ firstSlide, recommendationData }) => {
  return (
    <div className="sliderContent">
      {recommendationData
        .map((item, index) => {
          return (
            <div key={index} className="sliderItem">
              <img className="sliderImg" src={item.url} alt="productChoice" />
              <div className="sliderText">
                <p className="sliderName">{item.name}</p>
                <p className="sliderPrice">{item.price}</p>
              </div>
            </div>
          )
        })
        .slice(firstSlide, firstSlide + 3)}
    </div>
  )
}

export default SliderContent
