import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './Nav.scss'

const SearchModal = (searchModal, setSearchModal) => {
  return (
    <div className="searchModal">
      <div className="searchModalContent">
        <div
          className="searchHam"
          onClick={() => {
            setSearchModal(!searchModal)
          }}
        >
          <div className="line hamTopLine"></div>
          <div className="line hamBtmLine"></div>
        </div>
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

export default SearchModal
