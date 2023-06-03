import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ADDRESS_DATA from '../Data/addressData'

import './Address.scss'

const Address = () => {
  const [inputValue, setInputValue] = useState()

  const isButtonActive =
    ADDRESS_DATA[0].value === '' &&
    ADDRESS_DATA[1].value === '' &&
    ADDRESS_DATA[2].value === ''

  return (
    <div className="address">
      <div className="addressBox">
        <div className="ham">
          <div className="line leftLine"></div>
          <div className="line rightLine"></div>
        </div>
        <p className="mainTitle">배송지 등록</p>
        <div className="addressInnerBox">
          <div className="greyLine">
            <div className="addressMapBox">
              {ADDRESS_DATA.map((data, i) => {
                return (
                  <div className="addressInput">
                    <p className="title">
                      {ADDRESS_DATA[i].name}
                      <span className="must"> {ADDRESS_DATA[i].must}</span>
                    </p>

                    <input
                      className="inputBox"
                      type="text"
                      placeholder={ADDRESS_DATA[i].nameHolder}
                    />
                  </div>
                )
              })}
            </div>
            <div className="LowergreyLine" />

            <button className={!isButtonActive ? 'apply' : 'applyActive'}>
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
