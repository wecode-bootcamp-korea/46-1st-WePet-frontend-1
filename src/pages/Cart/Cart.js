import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Count from './Count/Count'
import './Cart.scss'

const Cart = () => {
  const navigate = useNavigate()

  const [checkItems, setCheckItems] = useState([])
  const [quantity, setQuantity] = useState({})

  let totalPrice = 10000
  let deliveryPrice = 3000

  const handleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id])
    } else {
      setCheckItems(checkItems.filter(item => item !== id))
    }
  }

  const handleAllCheck = checked => {
    if (checked) {
      setCheckItems(CART_ITEM_LIST.map(item => item.id))
    } else {
      setCheckItems([])
    }
  }

  const handleQuantityChange = (id, value) => {
    setQuantity(prev => ({ ...prev, [id]: value }))
  }

  return (
    <div className="cart">
      <div className="cartHeader">
        <h1>장바구니</h1>
      </div>
      <main className="cartContainer">
        <section className="cartProduct">
          <div className="cartProductOption">
            <div>
              <input
                type="checkbox"
                onChange={e => handleAllCheck(e.target.checked)}
                checked={checkItems.length === CART_ITEM_LIST.length}
              />
              <span>전체선택</span>
              <span className="checkedItems">
                ({checkItems.length}/{CART_ITEM_LIST.length})
              </span>
            </div>
            <button
              className="cartProductDeleteBtn"
              onClick={() => {
                alert('선택상품을 지우시겠습니까?')
              }}
            >
              선택삭제
            </button>
          </div>
          <ul className="cartProductList">
            {CART_ITEM_LIST.map((item, index) => {
              return (
                <li className="cartProductItem" key={index}>
                  <input
                    type="checkbox"
                    onChange={e => handleCheck(e.target.checked, item.id)}
                    checked={checkItems.includes(item.id)}
                  />
                  <img
                    className="cartProductItemImg"
                    src={item.url}
                    alt={`${item.name}-product-img`}
                  />
                  <div className="cartProductName">{item.name}</div>
                  <Count
                    quantity={quantity[item.id] || 1}
                    handleChange={value => handleQuantityChange(item.id, value)}
                  />
                  <span className="cartProductPrice">{item.price}</span>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="cartPurchase">
          <ul className="cartPurchaseContainer">
            <li className="cartPurchaseKey">
              <span className="keyTitle">총 상품금액</span>
              <span className="keyValue">{`${totalPrice}원`}</span>
            </li>
            <li className="cartPurchaseKey">
              <span className="keyTitle">배송비</span>
              <span className="keyValue">{`${deliveryPrice}원`}</span>
            </li>
            {totalPrice < 30000 ? (
              <div className="deliveryAlert">
                <div className="deliveryAlertMessage">{`${
                  30000 - totalPrice
                }원 더 주문 시, 무료배송`}</div>
                <div className="deliveryAlertTriangle" />
              </div>
            ) : null}
            <li className="cartPurchaseKey">
              <span className="keyTitle">결제예상금액</span>
              <span className="keyValue">{`${totalPrice + 3000}원`}</span>
            </li>
          </ul>
          <button
            className="cartPurchaseBtn"
            onClick={() => {
              navigate('/purchase')
            }}
          >
            {`${totalPrice + deliveryPrice}원`} 주문하기
          </button>
        </section>
      </main>
    </div>
  )
}

export default Cart

const CART_ITEM_LIST = [
  {
    id: 0,
    name: '배달이친구들 케이블타이 2종',
    price: '4000원',

    url: 'https://via.placeholder.com/600/8985dc',
  },
  {
    id: 1,
    name: '표백을 하지 않은 재생지로 만든 메모잇',
    price: '2300원',
    url: 'https://via.placeholder.com/600/56a8c2Q',
  },
  {
    id: 2,
    name: '커피찌꺼기를 재활용해 손으로 만든 연필',
    price: '23000원',
    url: 'https://via.placeholder.com/600/771796',
  },
  {
    id: 3,
    name: '커피찌꺼기를 재활용해 손으로 만든 연필',
    price: '23000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
]
