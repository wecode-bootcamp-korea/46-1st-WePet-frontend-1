import React from 'react'
import './Count.scss'

const Count = ({ id, quantity, cartData, setCartData }) => {
  const handleAdd = () => {
    fetch('http://10.58.52.81:8001/shopping-carts/add/single-item', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjg2MDM5OTAxLCJleHAiOjE3NzIzNTM1MDF9.xkedNNKZOXYe0SA8KJL9xtyuyvjwIQheW4ETTUx-qO8',
      },
      body: JSON.stringify({ productId: id }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  const handleSubtract = () => {
    fetch('http://10.58.52.81:8001/shopping-carts/subtract/single-item', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjg2MDM5OTAxLCJleHAiOjE3NzIzNTM1MDF9.xkedNNKZOXYe0SA8KJL9xtyuyvjwIQheW4ETTUx-qO8',
      },
      body: JSON.stringify({ productId: id }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
  return (
    <div className="count">
      <button
        className="countBtn"
        onClick={() => {
          if (quantity - 1 > 0) handleSubtract()
        }}
      >
        -
      </button>
      <div className="totalQuantity">{quantity}</div>
      <button
        className="countBtn"
        onClick={() => {
          if (quantity + 1 < 21) handleAdd()
        }}
      >
        +
      </button>
    </div>
  )
}

export default Count
