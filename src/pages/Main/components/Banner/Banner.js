import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'

function Banner({ src, data }) {
  return (
    <div className="bannerSection">
      <Link to="/">
        <img className="bannerImg" src={src} alt="linkToPage" />
      </Link>
      <span className="bannerText">{data}</span>
    </div>
  )
}

export default Banner
