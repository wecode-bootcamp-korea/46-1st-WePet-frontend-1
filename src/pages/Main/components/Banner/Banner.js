import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'
import Third from '../../assets/Third.jpg'

function Banner() {
  return (
    <div className="bannerSection">
      <Link to="/">
        <img className="bannerImg" src={Third} alt="linkToPage" />
      </Link>
      <span className="bannerText">BANNER TEXT</span>
    </div>
  )
}

export default Banner
