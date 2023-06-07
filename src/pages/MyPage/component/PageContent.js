import React, { useState } from 'react'
import MyPageModal from './MyPageModal'
import './PageContent.scss'

const PageContent = ({ title, content, button }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

      {title !== '포인트' ? (
        <div className="pageContentText">
          <h3 className="exclamation">앗!</h3>
          <div className="text">{content}</div>
        </div>
      ) : (
        <div className="pointList">
          <div className="pointBox">
            <h4 className="point">500,000 point</h4>
            <div className="condition">신규 회원 부여 포인트</div>
            <div className="conditionDetail">
              2023년 6월 30일까지 <br /> 사용 가능
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PageContent
