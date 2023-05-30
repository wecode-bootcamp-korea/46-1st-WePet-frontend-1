import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

import './Nav.scss'

const Modal = () => {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalPtag">
          <p>앗!</p>
          <p>로그인이 필요해요</p>
        </div>
        <span className="ulTitle">테마</span>
        <ul className="ulBox">
          <Link to="/">
            <li>전체보기</li>
          </Link>
          <Link to="/">
            <li>우리가 돈 나가는 일에 대처하는 자세</li>
          </Link>
          <Link to="/">
            <li>버츄얼굿즈의 탄생</li>
          </Link>
          <Link to="/">
            <li>제 방 구경하실 분</li>
          </Link>
        </ul>
        <span className="ulTitle">카테고리</span>
        <ul className="ulBox">
          <Link to="/">
            <li>전체보기</li>
          </Link>
          <Link to="/">
            <li>사료</li>
          </Link>
          <Link to="/">
            <li>간식</li>
          </Link>
          <Link to="/">
            <li>용품</li>
          </Link>
        </ul>

        <div className="modalBottom">
          <div className="inquire">
            <div className="inquireIcon">
              <FontAwesomeIcon
                icon={faHeadset}
                style={{ color: '#ffffff' }}
                size="lg"
              />
            </div>
            <span>1:1 문의</span>
          </div>
          <div className="bottomLine"></div>
          <div className="emailInquire">
            <span>이메일 문의</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
