import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCheck, faL } from '@fortawesome/free-solid-svg-icons'

import PURCHASE_LIST from './Data/purchaseListData'
import Address from './Component/Address'
import './Purchase.scss'

const Purchase = () => {
  const [agreeList, setAgreeList] = useState({
    isInfoAgree: false,
    isUseAgree: false,
  })

  const { isInfoAgree, isUseAgree } = agreeList // 구조분해할당

  const isAllChecked = Object.values(agreeList).every(list => list === true)
  //const isAllChecked =
  //Object.values(agreeList) : 해당 객체의 value값만 모아서 배열로 새로 Object.values( )
  //.every(list => list === true) : 배열 내의 모든 개체를 검사해서, 모두가 true 일때만 true 반환,
  //                                이외의 경우는 모두 false 반환

  const handleAgree = name => {
    setAgreeList(prev => ({ ...prev, [name]: !prev[name] }))
  }
  //

  const handleAllCheck = () => {
    if (isAllChecked) {
      setAgreeList(prev => ({ ...prev, isInfoAgree: false, isUseAgree: false }))
    } else {
      setAgreeList(prev => ({ ...prev, isInfoAgree: true, isUseAgree: true }))
    }
  }

  const totalPrice = PURCHASE_LIST.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  )
  // .reduce(acc, cur) : acc 기존 값(누적 값) + cur(현재 값)
  // acc는 순회 중 유지 되므로 결과값은 모든 값의 총 계를 반환

  return (
    <>
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
            </p>
            <button
              className={`${
                isAllChecked ? 'purchaseBtnActive' : 'purchaseBtn'
              }`}
              disabled={!isAllChecked}
            >
              {/*얘 왜 한개만 충족되도 되는지 모르겟음!*/} 원 결제하기
            </button>
          </div>
        </div>
      </div>
      <Address />
    </>
  )
}

export default Purchase
