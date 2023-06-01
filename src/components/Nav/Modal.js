import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import MODAL_DATA1 from './modalData'
import MODAL_DATA2 from './modalData2'

import './Modal.scss'

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
          {MODAL_DATA1.map(data => {
            return (
              <Link to={data.link}>
                <li>{data.name}</li>
              </Link>
            )
          })}
        </ul>
        <span className="ulTitle">카테고리</span>
        <ul className="ulBox">
          {MODAL_DATA2.map(data => {
            return (
              <Link to={data.link}>
                <li>{data.name}</li>
              </Link>
            )
          })}
        </ul>

        <div className="modalBottom">
          <div className="inquire">
            <div className="inquireIcon">
              <FontAwesomeIcon icon={faHeadset} size="lg" className="icon" />
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
