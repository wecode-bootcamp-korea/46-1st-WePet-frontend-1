import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FOOTER_LINK_LIST, FOOTER_INFO } from './footerData'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="logo">WePet</div>
      </Link>
      <ul className="footerList">
        {FOOTER_LINK_LIST.map(data => {
          return (
            <Link to={data.link}>
              <li className="list">
                {data.icon && (
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: '#000000' }}
                    size="lg"
                    className="icon"
                  />
                )}
                {data.name}
              </li>
            </Link>
          )
        })}
      </ul>
      <ul className="footerDetails">
        {FOOTER_INFO.map(data => {
          return <li className="info">{data.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Footer
