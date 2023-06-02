import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCheck, faL } from '@fortawesome/free-solid-svg-icons'

import PURCHASE_LIST from './Data/purchaseListData'
import './Purchase.scss'

const Purchase = () => {
  const [isCheckLeft, setIsCheckLeft] = useState(false)
  const [isCheckRight, setIsCheckRight] = useState(false)

  const [AgreeList, setAgreeList] = useState({
    isInfoAgree: false,
    isUseAgree: false,
  })

  const { isInfoAgree, isUseAgree } = AgreeList

  const handleAgree = name => {
    setAgreeList(prev => ({ ...prev, [name]: !prev[name] }))
  }

  const totalPrice = PURCHASE_LIST.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  )

  const isActivePurchaseBtn = () => {
    return !isCheckLeft && !isCheckRight ? true : false
  }

  return (
    <div className="purchase">
      <p className="orderListTitle">주문서</p>
      <div className="purchaseBox">
        <div className="orderListLeft">
          <p className="title">배송지</p>
          <div className="leftInnerBoxCenter">
            <button className="addressBtn">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              배송지 등록하기
            </button>
          </div>
          <p className="title">주문상품</p>
          <div className="leftInnerBox">
            {PURCHASE_LIST.map(data => {
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
            <p className="spaceBetween">
              <div>
                <input className="radio" type="radio" />
                <span>포인트결제</span>
                <input
                  className="point"
                  type="number"
                  onKeyDown={e => {
                    if (
                      (e.keyCode >= 96 && e.keyCode <= 105) ||
                      (e.keyCode >= 48 && e.keyCode <= 57) ||
                      e.keyCode === 8 ||
                      e.keyCode === 9
                    ) {
                      return true
                    } else {
                      e.preventDefault()
                      return false
                    }
                  }}
                />
              </div>
              <span className="grey">총 10000포인트 사용 가능</span>
            </p>
            <p>
              <input type="checkbox" className="checkBox" />
              <span className="supTitle">포인트 모두 적용</span>
            </p>
          </div>

          <p className="title">약관동의</p>
          <div className="leftInnerBoxBottom">
            <div className="checkBox">
              <input
                type="checkbox"
                onClick={() => {
                  setIsCheckLeft(!isCheckLeft)
                }}
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
              &#40;필수&#41; 구매할 상품의 결제정보&#40;상품명, 상품가격&#41;를
              확인하였으며, 구매진행에 동의합니다.
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
            <span>{totalPrice > 30000 ? '-' : +3000}</span>
          </p>
          <div className="line" />

          <p className="spaceBetween">
            <span className="title">총 결제금액</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </p>
          <div className="line"></div>
          <p>
            <input
              type="checkbox"
              className="checkBox"
              onClick={() => {
                setIsCheckRight(!isCheckRight)
              }}
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
              &#40;필수&#41; 구매할 상품의 결제정보&#40;상품명, 상품가격&#41;를
              확인하였으며, 구매진행에 동의합니다.
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
          </p>
          <button
            className={`${
              !isActivePurchaseBtn() ? 'purchaseBtnActive' : 'purchaseBtn'
            }`}
            disabled={!isActivePurchaseBtn()}
          >
            {/*얘 왜 한개만 충족되도 되는지 모르겟음!*/} 원 결제하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Purchase
