import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Nav.scss'

const SearchModal = () => {
  return (
    <div className="SearchModal">
      <div className="searchModalContent">
        <div className="searchBar">
          <input type="text" placeholder="검색어를 입력하세요."></input>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            className="icon"
          />
        </div>
      </div>
    </div>
  )
}
const Modal = () => {
  return (
    <div className="Modal">
      <div className="ham">
        <div className="line modalHamLeftLine"></div>
        <div className="line modalHamRightLine"></div>
      </div>
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

const Nav = () => {
  const [isHover, setIsHover] = useState(false)
  const [modal, setModal] = useState(false)
  const [searchModal, setSearchModal] = useState(false)

  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }

  return (
    <>
      <div className="Nav">
        <Link to="/">
          <div className="logo">WePet</div>
        </Link>
        <div className="category">
          <Link to="/">
            <span>사료</span>
          </Link>
          <Link to="/">
            <span>간식</span>
          </Link>
          <Link to="/">
            <span>용품</span>
          </Link>
        </div>

        <div className="navIcon">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => {
              setSearchModal(true)
            }}
            size="lg"
            className="icon"
          />
        </div>
        <div className="navIcon">
          <FontAwesomeIcon icon={faCartShopping} size="lg" className="icon" />
        </div>
        <button
          className={isHover ? 'btnColorChange' : 'loginBtn'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          로그인
        </button>
        <div
          className="ham"
          onClick={() => {
            setModal(true)
          }}
        >
          <div className="line hamTopLine"></div>
          <div className="line hamMidLine"></div>
          <div className="line hamBtmLine"></div>
        </div>
      </div>
      {searchModal === true ? <SearchModal /> : ''}
      {modal === true ? <Modal /> : ''}
    </>
  )
}

export default Nav
