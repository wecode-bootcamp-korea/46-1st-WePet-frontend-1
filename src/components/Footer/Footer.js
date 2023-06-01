import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'
import FOOTER_DATA1 from './footerData1'
import FOOTER_DATA2 from './footerData2'

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="logo">WePet</div>
      </Link>
      <ul className="footerList">
        {FOOTER_DATA1.map(data => {
          return (
            <Link to={data.link}>
              <li>{data.name}</li>
            </Link>
          )
        })}
        <Link to="/">
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: '#000000' }}
              size="lg"
              className="icon"
            />
            @wepet_store
          </li>
        </Link>
      </ul>
      <ul className="footerDetails">
        {FOOTER_DATA2.map(data => {
          return <li>{data.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Footer
