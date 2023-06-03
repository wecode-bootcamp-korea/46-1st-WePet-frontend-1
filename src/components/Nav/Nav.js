import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

import Modal from './Component/Modal'
import SearchModal from './Component/SearchModal'
import MENU_DATA from './data/navData'

import './Nav.scss'

const Nav = () => {
  const [isLogoHover, setIsLogoHover] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [isSearchModal, setIsSearchModal] = useState(false)

  const handleLogoMouseOver = () => {
    setIsLogoHover(true)
  }
  const handleLogoMouseOut = () => {
    setIsLogoHover(false)
  }
  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }

  return (
    <>
      <div className="nav">
        <Link
          to="/"
          onMouseOver={handleLogoMouseOver}
          onMouseOut={handleLogoMouseOut}
        >
          {isLogoHover ? (
            <img className="logo" src="/images/LogoYellow.png" />
          ) : (
            <img className="logo" src="/images/LogoBlack.png" />
          )}
        </Link>
        <div className="category">
          {MENU_DATA.map(data => {
            return (
              <Link to={MENU_DATA.link}>
                <span className="categoryName">{data.name}</span>
              </Link>
            )
          })}
        </div>
        <div className="navIcon">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => {
              setIsSearchModal(prev => !prev)
            }}
            size="xl"
            className="icon"
          />
        </div>
        <Link to="/cart">
          <div className="navIcon">
            <FontAwesomeIcon icon={faCartShopping} size="xl" className="icon" />
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
              setIsModal(prev => !prev)
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
