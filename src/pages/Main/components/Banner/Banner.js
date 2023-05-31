import React from 'react'
import './Banner.scss'
import Third from '../../assets/Third.jpg'

function Banner() {
  return (
    <div className="bannerSection">
      <a href="/">
        <img className="bannerImg" src={Third} alt="linkToPage" />
      </a>
      <span className="bannerText">BANNER TEXT</span>
    </div>
  )
}

export default Banner
