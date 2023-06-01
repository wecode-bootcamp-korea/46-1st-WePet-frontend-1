import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping, faHeadset } from '@fortawesome/free-solid-svg-icons'

import Modal from './Modal'
import SearchModal from './SearchModal'
import MODAL_DATA from './modalData'
import './Nav.scss'

const Nav = () => {
  const [isHover, setIsHover] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [isSearchModal, setIsSearchModal] = useState(false)

  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }

  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="logo">WePet</div>
        </Link>
        <div className="category">
          <Link to="/productlist">
            <span className="categoryName">{MODAL_DATA.list1}</span>
          </Link>
          <Link to="/productlist">
            <span className="categoryName">{MODAL_DATA.list2}</span>
          </Link>
          <Link to="/productlist">
            <span className="categoryName">{MODAL_DATA.list3}</span>
          </Link>
        </div>
        <div className="navIcon">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => {
              setIsSearchModal(!isSearchModal)
            }}
            size="lg"
            className="icon"
          />
        </div>
        <Link to="/cart">
          <div className="navIcon">
            <FontAwesomeIcon icon={faCartShopping} size="lg" className="icon" />
          </div>
        </Link>
        <Link to="/login">
          <button
            className={isHover ? 'btnColorChange' : 'loginBtn'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            로그인
          </button>
        </Link>
        {isSearchModal ? (
          ''
        ) : (
          <div
            className="ham"
            onClick={() => {
              setIsModal(!isModal)
            }}
          >
            <div className={`line ${isModal && 'hamTopLine'}`}></div>
            <div className={`line ${isModal && 'hamMidLine'}`}></div>
            <div className={`line ${isModal && 'hamBtmLine'}`}></div>
          </div>
        )}
      </div>
      {isSearchModal && (
        <SearchModal
          searchModal={isSearchModal}
          setSearchModal={setIsSearchModal}
        />
      )}
      {isModal && <Modal />}
    </>
  )
}

export default Nav
