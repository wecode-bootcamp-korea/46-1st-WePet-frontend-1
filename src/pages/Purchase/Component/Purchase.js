import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons'

import Address from './Address'
import PurchaseModal from './PurchaseModal'
import './Purchase.scss'

const Purchase = () => {
  const [isModal, setIsModal] = useState(false)
  const [isPurchaseModal, setIsPurchaseModal] = useState(false)
  const [inputValue, setInputValue] = useState()

  const [data, setData] = useState({})
  const [listData, setListData] = useState([])

  const [agreeList, setAgreeList] = useState({
    isInfoAgree: false,
    isUseAgree: false,
  })

  const { isInfoAgree, isUseAgree } = agreeList

  const isAllChecked = Object.values(agreeList).every(list => list === true)

  const handleUserInput = e => {
    setInputValue(e.target.value)
  }

  const compareWithPoint = data => {
    if (data.point < inputValue) {
      return <PurchaseModal />
    }
  }

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

  const totalPrice = listData.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  )

  useEffect(() => {
    fetch('/data/pointData.json')
      .then(response => response.json())
      .then(result => setData(result))
  }, [])

  useEffect(() => {
    fetch('/data/purchaseListData.json')
      .then(response => response.json())
      .then(result => setListData(result))
  }, [])

  if (!data.point) return null
  if (!listData) return null

  return (
    <>
      <div className="purchase">
        <p className="orderListTitle">주문서</p>
        <div className="purchaseBox">
          <div className="orderListLeft">
            <p className="title">배송지</p>
            <div className="leftInnerBoxCenter">
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
              {listData.map(data => {
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
                    onChange={handleUserInput}
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
                <span className="grey">
                  총 {data.point.toLocaleString()}포인트 사용 가능
                </span>
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
              onClick={() => setIsPurchaseModal(prev => !prev)}
            >
              {totalPrice > 30000
                ? totalPrice.toLocaleString()
                : (totalPrice + 3000).toLocaleString()}
              원 원 결제하기
            </button>
          </div>
          {isModal && <Address isModal={isModal} setIsModal={setIsModal} />}
          {isPurchaseModal && (
            <PurchaseModal
              isPurchaseModal={isPurchaseModal}
              setIsPurchaseModal={setIsPurchaseModal}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Purchase
