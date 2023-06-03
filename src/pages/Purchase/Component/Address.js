import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ADDRESS_DATA from '../Data/addressData'

import './Address.scss'

const Address = () => {
  return (
    <div className="address">
      <div className="addressBox">
        <div className="ham">
          <div className="line leftLine"></div>
          <div className="line rightLine"></div>
        </div>
        <p className="mainTitle">배송지 등록</p>
        <div className="greyLine"></div>
        {ADDRESS_DATA.map((data, i) => {
          return (
            <div>
              <p className="title">
                {ADDRESS_DATA[i].name} <span className="must">*</span>
              </p>
              <input type="text" placeholder={ADDRESS_DATA[i].nameHolder} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Address
