import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Count from './Count/Count'
import CartModal from './CartModal/CartModal'
import './Cart.scss'

const Cart = () => {
  const navigate = useNavigate()
  const [cartData, setCartData] = useState([])
  const [checkItems, setCheckItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const TOKEN = localStorage.getItem('TOKEN')

  const getCartItem = () => {
    fetch('http://10.58.52.81:8001/shopping-carts?userId=4', {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.data.length > 0) {
          setCartData(data.data[0].items)
        } else {
          setCartData([])
        }
      })
  }

  useEffect(() => {
    getCartItem()
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
      setCheckItems(cartData.map(item => item.productId))
    } else {
      setCheckItems([])
    }
  }

  const deleteAllCartItem = () => {
    fetch(`http://10.58.52.81:8001/shopping-carts/remove/all-items`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
    })
      .then(res => {
        if (res.status === 204) {
          setCartData([])
        }
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  const deleteCartItem = () => {
    const selectItem = checkItems[0]
    fetch(
      `http://10.58.52.81:8001/shopping-carts/remove/single-item/${selectItem}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: TOKEN,
        },
        body: JSON.stringify({ userId: 4 }),
      }
    ).then(res => {
      if (res.status === 204) {
        getCartItem()
      }
    })
  }

  const totalPrice = cartData.reduce(
    (sum, item) => sum + item.productPrice * item.productQuantity,
    0
  )

  const deliveryPrice = totalPrice > 30000 || totalPrice === 0 ? 0 : 3000

  const isCartPriceValid = totalPrice + deliveryPrice > 0

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
              <CartModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                deleteCartItem={deleteCartItem}
                deleteAllCartItem={deleteAllCartItem}
                checkItems={checkItems}
                cartData={cartData}
              />
            </div>
          )}
          <ul className="cartProductList">
            {cartData.length > 0 ? (
              cartData.map((item, index) => {
                return (
                  <li className="cartProductItem" key={index}>
                    <input
                      type="checkbox"
                      onChange={e =>
                        handleCheck(e.target.checked, item.productId)
                      }
                      checked={checkItems.includes(item.productId)}
                    />
                    <img
                      className="cartProductItemImg"
                      src={item.productImage}
                      alt={`${item.productName}-product-img`}
                    />
                    <div className="cartProductName">{item.productName}</div>
                    <Count
                      id={item.productId}
                      quantity={item.productQuantity}
                      cartData={cartData}
                      setCartData={setCartData}
                      getCartItem={getCartItem}
                    />
                    <span className="cartProductPrice">
                      {`${(
                        item.productPrice * item.productQuantity
                      ).toLocaleString()}원`}
                    </span>
                  </li>
                )
              })
            ) : (
              <div className="noCartItemAlert">
                <h2 className="alertTitle">앗!</h2>
                <div className="alertText">장바구니가 텅~</div>
              </div>
            )}
          </ul>
        </section>
        <section className="cartPurchase">
          <ul className="cartPurchaseContainer">
            <li className="cartPurchaseKeyAmount">
              <span className="keyTitle">총 상품금액</span>
              <span className="keyValue">{`${totalPrice.toLocaleString()}원`}</span>
            </li>
            <li className="cartPurchaseKeyAmount">
              <span className="keyTitle">배송비</span>
              <span className="keyValue">{`${deliveryPrice.toLocaleString()}원`}</span>
            </li>
            {totalPrice > 0 && totalPrice < 30000 && (
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
                totalPrice + deliveryPrice
              ).toLocaleString()}원`}</span>
            </li>
          </ul>
          <button
            className={
              isCartPriceValid ? 'cartPurchaseBtn' : 'cartPurchaseBtn disabled'
            }
            disabled={!isCartPriceValid}
            onClick={() => {
              navigate('/purchase')
            }}
          >
            {`${(totalPrice + deliveryPrice).toLocaleString()}원`} 주문하기
          </button>
        </section>
      </main>
    </div>
  )
}

export default Cart
