import React from 'react'
import './Count.scss'

const Count = ({ id, quantity, cartData, setCartData }) => {
  const handleCount = value => {
    const newArray = [...cartData]
    setCartData(
      newArray.map(list => {
        if (list.id === id) {
          return { ...list, quantity: list.quantity + value }
        } else {
          return list
        }
      })
    )
  }

  return (
    <div className="count">
      <button
        className="countBtn"
        onClick={() => {
          if (quantity - 1 > 0) handleCount(-1)
        }}
      >
        -
      </button>
      <div className="totalQuantity">{quantity}</div>
      <button
        className="countBtn"
        onClick={() => {
          if (quantity + 1 < 21) handleCount(1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Count
