import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link to="/">
          <div className="logo">WePet</div>
        </Link>
        <ul className="footerList">
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>공지사항</li>
          </Link>
          <Link to="/">
            <li>이용약관</li>
          </Link>
          <Link to="/">
            <li>개인정보처리방침</li>
          </Link>
          <Link to="/">
            <li>대량구매/제휴안내</li>
          </Link>
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
          <li>상호 : WePet</li>
          <li>대표 : 백지율</li>
          <li>사업자등록번호 : 123-45-67890</li>
          <li>통신판매업신고번호: 2023-WePet-1234</li>
          <li>사업자정보확인</li>
          <li>대표번호 : 1234-5678</li>
          <li>이메일 : wepet_store@wepet.com</li>
          <li>주소 : 위팻시 위팻구 웨팻대로 123 위팻빌딩</li>
          <li>호스팅제공 : WePet</li>
          <li>© Wepet Corp. All rights reserved</li>
        </ul>
      </div>
    </>
  )
}

export default Footer
