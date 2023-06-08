import React, { useState } from 'react'
import ADDRESS_DATA from '../Data/addressData'

import './Address.scss'

const Address = ({
  setIsModal,
  setIsSaved,
  inputValue,
  setInputValue,
  handleSaveAddress,
}) => {
  const { name, phone, address1, address2 } = inputValue

  const keyDownFunction = (e, type) => {
    if (type !== 'number') return
    if (
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      e.keyCode === 8 ||
      e.keyCode === 9
    ) {
      return true
    } else {
      e.preventDefault()
      return false
    }
  }

  const isButtonActive = name && phone && address1 && address2

  const handleUserInput = e => {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }
  const handleClick = () => {
    handleSaveAddress()
    setIsModal(prev => !prev)
    setIsSaved(prev => !prev)
  }

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
              {ADDRESS_DATA.map((data, key, index) => {
                return (
                  <div className="addressInput" key={key} index={index}>
                    <p className="title">
                      {data.title}
                      <span className="must"> {data.must}</span>
                    </p>

                    <input
                      className="inputBox"
                      type={data.type}
                      name={data.name}
                      onKeyDown={e => keyDownFunction(e, data.type)}
                      placeholder={data.titleHolder}
                      onChange={handleUserInput}
                    />
                  </div>
                )
              })}
            </div>
            <div className="LowergreyLine" />

            <button
              className={`applyBtn ${!isButtonActive ? '' : 'Active'}`}
              onClick={() => handleClick()}
            >
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
