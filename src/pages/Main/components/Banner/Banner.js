import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'

function Banner({ src }) {
  return (
    <div className="bannerSection">
      <Link to="/">
        <img className="bannerImg" src={src} alt="linkToPage" />
      </Link>
      <span className="bannerText">BANNER TEXT</span>
    </div>
  )
}

export default Banner
