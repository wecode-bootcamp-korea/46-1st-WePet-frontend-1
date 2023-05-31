import React, { useState } from 'react'
import Modal from './Modal'
import SearchModal from './SearchModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Nav.scss'

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
              setSearchModal(!searchModal)
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
        {searchModal ? (
          ''
        ) : (
          <div
            className="ham"
            onClick={() => {
              setModal(!modal)
            }}
          >
            <div className={`line ${modal && 'hamTopLine'}`}></div>
            <div className={`line ${modal && 'hamMidLine'}`}></div>
            <div className={`line ${modal && 'hamBtmLine'}`}></div>
          </div>
        )}
      </div>
      {searchModal === true ? (
        <SearchModal
          searchModal={searchModal}
          setSearchModal={setSearchModal}
        />
      ) : (
        ''
      )}
      {modal === true ? <Modal /> : ''}
    </>
  )
}

export default Nav
