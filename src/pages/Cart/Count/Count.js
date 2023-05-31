import React from 'react'
import './Count.scss'

const Count = ({ id, quantity, onChange }) => {
  const handleCount = value => {
    if (quantity + value < 1) return
    onChange(quantity + value)
  }

  return (
    <div className="count" id={id}>
      <button
        className="countBtn"
        onClick={() => {
          handleCount(-1)
        }}
      >
        -
      </button>
      <div className="totalQuantity">{quantity}</div>
      <button
        className="countBtn"
        onClick={() => {
          handleCount(1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Count
