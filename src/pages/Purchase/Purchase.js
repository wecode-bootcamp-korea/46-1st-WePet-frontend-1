import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons'

import Address from './Component/Address'
import PurchaseModal from './Component/PurchaseModal'

import './Purchase.scss'

const Purchase = () => {
  useEffect(() => {
    fetch('/data/pointData.json')
      .then(response => response.json())
      .then(result => setPoint(result))
  }, [])

  useEffect(() => {
    fetch('/data/purchaseCartData.json')
      .then(response => response.json())
      .then(result => setCartData(result))
    console.log(cartData)
  }, [])

  const handleSaveAddress = () => {
    const TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQ2LCJlbWFpbCI6Im1peGVyMDMyNkBnbWFpbC5jb20iLCJpYXQiOjE2ODYxOTIxNTN9.kUNatf3DMv5BpxZsGGTCMKxRxiL90y7scDh96VhISwk'
    fetch('http://10.58.52.51:3000/users/address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        address1: inputValue.address1,
        address2: inputValue.address2,
      }),
    })
      .then(response => response.json())
      .then(result => setAddressData(result.data))
  }

  // const OrderList = () => {
  //   const TOKEN =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQ2LCJlbWFpbCI6Im1peGVyMDMyNkBnbWFpbC5jb20iLCJpYXQiOjE2ODYxOTIxNTN9.kUNatf3DMv5BpxZsGGTCMKxRxiL90y7scDh96VhISwk'
  //   fetch('http://10.58.52.51:3000/users/address', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: TOKEN,
  //     },
  //     body: JSON.stringify({
  //       address1: inputValue.address1,
  //       address2: inputValue.address2,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => setAddressData(result.data))
  // }

  const [orderList, setIsOrderList] = useState({})
  const [isModal, setIsModal] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isCheckedRadio, setIsCheckedRadio] = useState(false)
  const [addressData, setAddressData] = useState({})

  const [isPurchaseModal, setIsPurchaseModal] = useState(false)
  // const [isPurchaseModalValue, setIsPurchaseModalValue] = useState(false)

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

  if (!cartData) return null

  const totalPrice = cartData.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  )

  const isPurchaseModalValue = totalPrice <= point.points

  // const compareWithPoint = () => {
  //   if (totalPrice <= point.points) {
  //     setIsPurchaseModalValue(true)
  //   } else {
  //     setIsPurchaseModalValue(false)
  //   }
  // }

  const handleAgree = name => {
    setAgreeList(prev => ({ ...prev, [name]: !prev[name] }))
  }

  const handleAllCheck = () => {
    if (isAllChecked) {
      setAgreeList(prev => ({ ...prev, isInfoAgree: false, isUseAgree: false }))
    } else {
      setAgreeList(prev => ({ ...prev, isInfoAgree: true, isUseAgree: true }))
    }
  }

  if (!point.points) return null
  if (!cartData) return null

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
              {cartData.map(data => {
                return (
                  <p className="spaceBetween" key={data.id}>
                    {data.name}
                    <span>{data.quantity}개</span>
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
              disabled={!isAllChecked && isSaved && isCheckedRadio}
              onClick={() => {
                setIsPurchaseModal(prev => !prev)
                // compareWithPoint()
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
