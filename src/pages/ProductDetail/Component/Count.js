import React from 'react'
import './Count.scss'

const Count = ({ quantity, setQuantity }) => {
  const handleCount = value => {
    if (quantity + value < 1) return
    setQuantity(quantity + value)
  }
  return (
    <div className="count">
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
