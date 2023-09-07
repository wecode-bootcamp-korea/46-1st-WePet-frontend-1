import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons'

import Address from './Component/Address'
import PurchaseModal from './Component/PurchaseModal'
import { APIS } from '../../config'

import './Purchase.scss'

const Purchase = () => {
  const TOKEN = localStorage.getItem('TOKEN_cart')

  const [isModal, setIsModal] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isCheckedRadio, setIsCheckedRadio] = useState(false)
  const [addressData, setAddressData] = useState({})
  const [orderList, setOrderList] = useState([])
  const [orderTotal, setOrderTotal] = useState({})

  const [isPurchaseModal, setIsPurchaseModal] = useState(false)

  const [point, setPoint] = useState({})
  const [cartData, setCartData] = useState()

  const [agreeList, setAgreeList] = useState({
    isInfoAgree: false,
    isUseAgree: false,
  })

  const { isInfoAgree, isUseAgree } = agreeList

  const isAllChecked = Object.values(agreeList).every(list => list === true)

  const [inputValue, setInputValue] = useState({
    name: '',
    phone: '',
    address1: '',
    address2: '',
    memo: '',
  })
  useEffect(() => {
    fetch('/data/pointData.json')
      .then(response => response.json())
      .then(result => setPoint(result))
  }, [])

  useEffect(() => {
    fetch(`${APIS.order}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
    })
      .then(response => {
        if (response.ok) {
          response.json()
        } else {
          throw new Error('network error')
        }
      })
      .then(result => {
        setOrderList(result.data)
      })
      .catch(error => console.log(error))
  }, [])

  const handleOrderTotal = () => {
    fetch(`${APIS.order}/order-total`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        orderTotal: totalPrice,
      }),
    })
      .then(response => {
        if (response.ok) {
          response.json()
        } else {
          throw new error('network error')
        }
      })
      .then(result => setOrderTotal(result))
      .catch(error => console.log(error))
  }

  const handleSaveAddress = () => {
    const TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcwLCJlbWFpbCI6IndlY29kZSEhQG5hdmVyLmNvbSIsImlhdCI6MTY4NjU1NjEwN30.Q1kAFeyryMm3jggdWbcr9L9nUCDJQhhDNwcx2J7nd7A'
    fetch(`${APIS.address}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        userName: inputValue.name,
        phoneNumber: inputValue.phone,
        address1: inputValue.address1,
        address2: inputValue.address2,
        memo: inputValue.memo,
      }),
    })
      .then(response => {
        if (response.ok) {
          response.json()
        } else {
          throw new Error('network error')
        }
      })
      .then(result => setAddressData(result.data))
      .catch(error => console.log(error))
  }

  const handleAgree = name => {
    setAgreeList(prev => ({ ...prev, [name]: !prev[name] }))
  }

  const handleAllCheck = () => {
    if (isAllChecked) {
      return setAgreeList(prev => ({
        ...prev,
        isInfoAgree: false,
        isUseAgree: false,
      }))
    }
    return setAgreeList(prev => ({
      ...prev,
      isInfoAgree: true,
      isUseAgree: true,
    }))
  }

  if (!point.points) return null
  if (!orderList) return null

  const totalPrice = orderList.reduce(
    (acc, cur) => acc + cur.itemQuantity * cur.itemPrice,
    0
  )

  const isPurchaseModalValue = totalPrice <= point.points

  return (
    <>
      <div className="purchase">
        <p className="orderListTitle">주문서</p>
        <div className="purchaseBox">
          <div className="orderListLeft">
            <p className="title">배송지</p>
            <div className="leftInnerBoxCenter">
              {isSaved && (
                <div className="savedAddress">
                  <div className="savedName">{inputValue.name}</div>
                  <div className="saved grey">{inputValue.phone}</div>
                  <div className="saved">
                    {inputValue.address1} {inputValue.address2}
                  </div>
                  <div className="saved grey">{inputValue.memo}</div>
                </div>
              )}
              <button
                className="addressBtn"
                onClick={() => {
                  setIsModal(prev => !prev)
                }}
              >
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                배송지 등록하기
              </button>
            </div>
            <p className="title">주문상품</p>
            <div className="leftInnerBox">
              {orderList.map(data => {
                return (
                  <p className="spaceBetween" key={data.id}>
                    {data.productName}
                    <span>{data.itemQuantity}개</span>
                  </p>
                )
              })}
            </div>
            <p className="title">포인트결제</p>
            <div className="leftInnerBox">
              <div className="spaceBetween">
                <div>
                  <input
                    className="radio"
                    type="radio"
                    onClick={() => {
                      setIsCheckedRadio(prev => !prev)
                    }}
                  />
                  <span>포인트결제</span>
                </div>
                <span className="grey">
                  총 {point.points.toLocaleString()}포인트 사용 가능
                </span>
              </div>
            </div>

            <p className="title">약관동의</p>
            <div className="leftInnerBoxBottom">
              <div className="checkBox">
                <input
                  type="checkbox"
                  checked={isAllChecked}
                  onChange={handleAllCheck}
                />
                <span className="subTitle">전체동의</span>
              </div>
              <div className="subTitleGrey">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={`${isInfoAgree ? 'checkIconYellow' : 'checkIcon'}`}
                  onClick={() => {
                    handleAgree('isInfoAgree')
                  }}
                />
                &#40;필수&#41; 구매할 상품의 결제정보&#40;상품명,
                상품가격&#41;를 확인하였으며, 구매진행에 동의합니다.
              </div>
              <div className="subTitleGrey">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={`${isUseAgree ? 'checkIconYellow' : 'checkIcon'}`}
                  onClick={() => {
                    handleAgree('isUseAgree')
                  }}
                />
                &#40;필수&#41; 개인정보 수집 및 이용에 동의합니다.
              </div>
            </div>
          </div>
          <div className="orderListRight">
            <p className="spaceBetween">
              <span className="title">주문금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </p>

            <p className="spaceBetween">
              <span className="title">배송비</span>
              <span>{totalPrice > 30000 ? '-' : +3000 + '원'}</span>
            </p>
            <div className="line" />

            <p className="spaceBetween">
              <span className="title">총 결제금액</span>
              <span>
                {totalPrice > 30000
                  ? totalPrice.toLocaleString()
                  : (totalPrice + 3000).toLocaleString()}
                원
              </span>
            </p>
            <div className="line" />
            <div>
              <input
                type="checkbox"
                className="checkBox"
                checked={isAllChecked}
                onChange={handleAllCheck}
              />
              <span className="title">전체동의</span>
              <div className="check">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={`${isInfoAgree ? 'checkIconYellow' : 'checkIcon'}`}
                  onClick={() => {
                    handleAgree('isInfoAgree')
                  }}
                />
                &#40;필수&#41; 구매할 상품의 결제정보&#40;상품명,
                상품가격&#41;를 확인하였으며, 구매진행에 동의합니다.
              </div>
              <div className="check">
                <FontAwesomeIcon
                  icon={faCheck}
                  className={`${isUseAgree ? 'checkIconYellow' : 'checkIcon'}`}
                  onClick={() => {
                    handleAgree('isUseAgree')
                  }}
                />
                &#40;필수&#41; 개인정보 수집 및 이용에 동의합니다.
              </div>
            </div>
            <button
              className={`${
                isAllChecked && isSaved && isCheckedRadio
                  ? 'purchaseBtnActive'
                  : 'purchaseBtn'
              }`}
              disabled={!isAllChecked && !isSaved && !isCheckedRadio}
              onClick={() => {
                setIsPurchaseModal(prev => !prev)
                handleOrderTotal()
              }}
            >
              {totalPrice > 30000
                ? totalPrice.toLocaleString()
                : (totalPrice + 3000).toLocaleString()}
              원 결제하기
            </button>
          </div>
          {isModal && (
            <Address
              isModal={isModal}
              setIsModal={setIsModal}
              isSaved={isSaved}
              setIsSaved={setIsSaved}
              inputValue={inputValue}
              setInputValue={setInputValue}
              handleSaveAddress={handleSaveAddress}
            />
          )}
          {isPurchaseModal && (
            <PurchaseModal
              isPurchaseModal={isPurchaseModal}
              setIsPurchaseModal={setIsPurchaseModal}
              isPurchaseModalValue={isPurchaseModalValue}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Purchase
