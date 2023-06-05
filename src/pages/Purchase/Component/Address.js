import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ADDRESS_DATA from '../Data/addressData'

import './Address.scss'

const Address = ({ isModal, setIsModal }) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    phone: '',
    address: '', //post
    memo: '',
  })

  const { name, phone, address } = inputValue

  const isButtonActive = name && phone && address

  const handleUserInput = e => {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }

  console.log(inputValue)

  return (
    <div className="address">
      <div className="addressBox">
        <div
          className="ham"
          onClick={() => {
            setIsModal(prev => !prev)
          }}
        >
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
                      {data.title}
                      <span className="must"> {data.must}</span>
                    </p>

                    <input
                      className="inputBox"
                      type="text"
                      name={data.name}
                      placeholder={data.titleHolder}
                      onChange={handleUserInput}
                    />
                  </div>
                )
              })}
            </div>
            <div className="LowergreyLine" />

            <button className={!isButtonActive ? 'applyBtn' : 'applyBtnActive'}>
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
