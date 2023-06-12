import React, { useEffect, useState } from 'react'
import { APIS } from '../../../config'

import MyPageModal from './MyPageModal'
import './PageContent.scss'

const PageContent = ({ title, content, button }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [orderItem, setOrderItem] = useState([])

  const TOKEN = localStorage.getItem('TOKEN_cart')

  const getOrderHistory = () => {
    fetch(`${APIS.order}/order-history`, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => setOrderItem(data.data[0].orderData))
  }

  useEffect(() => {
    getOrderHistory()
  }, [])

  return (
    <div className="pageContent">
      <div className="pageContentHeader">
        {title !== '포인트' && isModalOpen && (
          <div className="modalLayout">
            <div className="modalLayer" />
            <MyPageModal setIsModalOpen={setIsModalOpen} />
          </div>
        )}
        <h1 className="pageContentTitle">{title}</h1>
        {button && (
          <button
            className="modalBtn"
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
          >
            {button}
          </button>
        )}
      </div>

      {title === '포인트' ? (
        <div className="pointList">
          <div className="pointBox">
            <h4 className="point">500,000 point</h4>
            <div className="condition">신규 회원 부여 포인트</div>
            <div className="conditionDetail">
              2023년 6월 30일까지 <br /> 사용 가능
            </div>
          </div>
        </div>
      ) : title === '주문/배송조회' ? (
        orderItem.orderItems && (
          <div className="order">
            <div className="orderHistory">
              <div className="orderHistoryItemNo">
                주문 번호: {orderItem.OrderNumber}
              </div>
              <div className="orderHistoryItemLength">
                {orderItem.orderItems.length}개의 배송 상품이 배송중입니다.
              </div>
              <div className="orderHistoryItem">
                총 주문금액: {`${orderItem.totalOrderPrice.toLocaleString()}원`}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="pageContentText">
          <h3 className="exclamation">앗!</h3>
          <div className="text">{content}</div>
        </div>
      )}
    </div>
  )
}

export default PageContent
