import React, { useState } from 'react'
import './Count.scss'

const Count = ({ quantity }) => {
  const [count, setCount] = useState(quantity)
  const handleCount = value => {
    if (quantity + value >= 1) {
      setCount(prev => prev + value)
    } else {
      return
    }
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
      <div className="totalQuantity">{count}</div>
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
