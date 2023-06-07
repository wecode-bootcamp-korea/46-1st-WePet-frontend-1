import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { MODAL_UPPER_DATA, MODAL_LOWER_DATA } from '../data/modalData'

import './Modal.scss'
import './modalAnimation.scss'

const Modal = () => {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalPtag">
          <p className="description">앗!</p>
          <p className="description">로그인이 필요해요</p>
        </div>
        <span className="ulTitle">테마</span>
        <ul className="ulBox">
          {MODAL_UPPER_DATA.map(data => {
            return (
              <Link to={data.link}>
                <li className="list">{data.name}</li>
              </Link>
            )
          })}
        </ul>
        <span className="ulTitle">카테고리</span>
        <ul className="ulBox">
          {MODAL_LOWER_DATA.map(data => {
            return (
              <Link to={data.link}>
                <li className="list">{data.name}</li>
              </Link>
            )
          })}
        </ul>

        <div className="modalBottom">
          <div className="inquire">
            <div className="inquireIcon">
              <Link to={'/mypage'}>
                <FontAwesomeIcon icon={faHeadset} size="lg" className="icon" />
              </Link>
            </div>
            <Link to={'/mypage'}>
              <span className="personal">1:1 문의</span>
            </Link>
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
