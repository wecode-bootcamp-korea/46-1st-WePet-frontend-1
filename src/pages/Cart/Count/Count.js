import React from 'react'
import './Count.scss'

const Count = ({ id, quantity, getCartItem }) => {
  const TOKEN = localStorage.getItem('TOKEN')

  const handleAdd = () => {
    fetch('http://10.58.52.81:8001/shopping-carts/add/single-item', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
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
        Authorization: TOKEN,
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
