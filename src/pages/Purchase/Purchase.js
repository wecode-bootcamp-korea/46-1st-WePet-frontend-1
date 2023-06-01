import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons'

import PURCHASE_LIST from './Data/purchaseListData'
import './Purchase.scss'

const Purchase = () => {
  const [isCheck, setIsCheck] = useState(false)
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
                <div className="subTitle">
                  {data.name}
                  <span>{data.quantity}개</span>
                </div>
              )
            })}
          </div>
          <p className="title">포인트결제</p>
          <div className="leftInnerBox">
            <p>
              <input className="radio" type="radio" />
              <span>포인트결제</span>
              <input className="point" type="number" ç />
            </p>
            <p>
              <input type="checkbox" className="checkBox" />
              <span className="supTitle">포인트 모두 적용</span>
            </p>
          </div>

          <p className="title">약관동의</p>
          <div className="leftInnerBoxBottom">
            <div className="checkBox">
              <input type="checkbox" />
              <span className="subTitle">전체 동의</span>
            </div>
            <div className="subTitleGrey">
              <FontAwesomeIcon
                icon={faCheck}
                // className={`${isCheck ? 'checkIconYellow' : 'checkIcon'}`}
                onClick={() => {
                  setIsCheck(!isCheck)
                  console.log(isCheck)
                }}
              />
              &#40;필수&#41; 구매할 상품의 결제정보&#40;상품명, 상품가격&#41;를
              확인하였으며, 구매진행에 동의합니다.
            </div>
            <div className="subTitleGrey">
              <FontAwesomeIcon icon={faCheck} className="checkIcon" />
              &#40;필수&#41; 개인정보 수집 및 이용에 동의합니다.
            </div>
          </div>
        </div>
        <div className="orderListRight">
          <p className="spaceBetween">
            <span className="title">주문금액</span>
            <span>1,200원</span>
          </p>

          <p className="spaceBetween">
            <span className="title">배송비</span>
            <span> + 3,000원</span>
          </p>
          <div className="line" />

          <p className="spaceBetween">
            <span className="title">총 결제금액</span>
            <span className>-</span>
          </p>
          <div className="line"></div>
          <p>
            <input type="checkbox" className="checkBox" />
            <span className="title">전체동의</span>
            <div className="check">
              <FontAwesomeIcon icon={faCheck} className="checkIcon" />
              &#40;필수&#41; 구매할 상품의 결제정보&#40;상품명, 상품가격&#41;를
              확인하였으며, 구매진행에 동의합니다.
            </div>
            <div className="check">
              <FontAwesomeIcon icon={faCheck} className="checkIcon" />
              &#40;필수&#41; 개인정보 수집 및 이용에 동의합니다.
            </div>
          </p>
          <button className="purchaseBtn">- 원 결제하기 </button>
        </div>
      </div>
    </div>
  )
}

export default Purchase
