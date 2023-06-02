import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Count from './Count/Count'
import Modal from './Modal/Modal'
import './Cart.scss'

const Cart = () => {
  const navigate = useNavigate()
  const [cartData, setCartData] = useState([])
  const [checkItems, setCheckItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch('/data/product.json')
      .then(res => res.json())
      .then(data => {
        setCartData(data)
      })
  }, [])

  const handleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id])
    } else {
      setCheckItems(checkItems.filter(item => item !== id))
    }
  }

  const handleAllCheck = checked => {
    if (checked) {
      setCheckItems(cartData.map(item => item.id))
    } else {
      setCheckItems([])
    }
  }

  const deleteCartItem = () => {
    const newCartItem = cartData.filter(item => !checkItems.includes(item.id))
    setCartData(newCartItem)
    setCheckItems([])
  }

  const totalPrice = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const deliveryPrice = totalPrice > 30000 ? 0 : 3000

  return (
    <div className="cart">
      <div className="cartHeader">
        <span className="headerTitle">장바구니</span>
      </div>
      <main className="cartContainer">
        <section className="cartProduct">
          <div className="cartProductOption">
            <div>
              <input
                type="checkbox"
                onChange={e => handleAllCheck(e.target.checked)}
                checked={checkItems.length === cartData.length}
              />
              <span>전체선택</span>
              <span className="checkedItems">
                ({checkItems.length}/{cartData.length})
              </span>
            </div>
            <button
              className="cartProductDeleteBtn"
              onClick={() => {
                if (checkItems.length !== 0) setIsModalOpen(true)
              }}
            >
              선택삭제
            </button>
          </div>
          {isModalOpen && (
            <div className="modalLayout">
              <div className="modalLayer" />
              <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                deleteCartItem={deleteCartItem}
              />
            </div>
          )}
          <ul className="cartProductList">
            {cartData.map((item, index) => {
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
                    id={item.id}
                    quantity={item.quantity}
                    cartData={cartData}
                    setCartData={setCartData}
                  />
                  <span className="cartProductPrice">
                    {`${(item.price * item.quantity).toLocaleString()}원`}
                  </span>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="cartPurchase">
          <ul className="cartPurchaseContainer">
            <li className="cartPurchaseKeyAmount">
              <span className="keyTitle">총 상품금액</span>
              {/*     <span className="keyValue"></span>*/}
              <span className="keyValue">{`${totalPrice.toLocaleString()}원`}</span>
            </li>
            <li className="cartPurchaseKeyAmount">
              <span className="keyTitle">배송비</span>
              <span className="keyValue">{`${deliveryPrice.toLocaleString()}원`}</span>
            </li>
            {totalPrice < 30000 && (
              <div className="deliveryAlert">
                <div className="deliveryAlertMessage">{`${(
                  30000 - totalPrice
                ).toLocaleString()}원 더 주문 시, 무료배송`}</div>
                <div className="deliveryAlertTriangle" />
              </div>
            )}
            <li className="cartPurchaseKeyTotal">
              <span className="keyTitle">결제예상금액</span>
              <span className="keyValue">{`${(
                totalPrice + 3000
              ).toLocaleString()}원`}</span>
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
