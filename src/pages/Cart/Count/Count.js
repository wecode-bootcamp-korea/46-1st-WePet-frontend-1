import React from 'react'
import './Count.scss'

const Count = ({ id, quantity, getCartItem }) => {
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
        if (data.message === 'ITEM_QUANTITY_ADD_SUCCESSFUL') getCartItem()
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
        if (data.message === 'ITEM_QUANTITY_SUBTRACT_SUCCESSFUL') getCartItem()
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
