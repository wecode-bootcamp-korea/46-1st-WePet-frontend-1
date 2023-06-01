import React from 'react'
import './Count.scss'

const Count = ({ index, quantity, setQuantity }) => {
  const handleCount = value => {
    if (quantity[index] + value >= 1) {
      setQuantity(prev => {
        const newQuantity = [...prev]
        newQuantity[index] += value
        return newQuantity
      })
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
      <div className="totalQuantity">{quantity[index]}</div>
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
