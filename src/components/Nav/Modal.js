import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import MODAL_DATA from './modalData'

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
          <Link to="/">
            <li>{MODAL_DATA.list0}</li>
          </Link>
          <Link to="/">
            <li>{MODAL_DATA.list4}</li>
          </Link>
          <Link to="/">
            <li>{MODAL_DATA.list5}</li>
          </Link>
          <Link to="/">
            <li>{MODAL_DATA.list6}</li>
          </Link>
        </ul>
        <span className="ulTitle">카테고리</span>
        <ul className="ulBox">
          <Link to="/productlist">
            <li>{MODAL_DATA.list0}</li>
          </Link>
          <Link to="/productlist">
            <li>{MODAL_DATA.list1}</li>
          </Link>
          <Link to="/productlist">
            <li>{MODAL_DATA.list2}</li>
          </Link>
          <Link to="/productlist">
            <li>{MODAL_DATA.list3}</li>
          </Link>
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
