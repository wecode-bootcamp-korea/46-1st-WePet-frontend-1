import React from 'react'
import './MyPageModal.scss'

const MyPageModal = ({ setIsModalOpen }) => {
  return (
    <>
      <div className="myPageModal">
        <form className="modalText">
          <h1 className="modalTitle">1:1 문의 작성</h1>
          <input
            type="text"
            placeholder="항목을 선택해주세요"
            className="categoryOption"
          />
          <div className="orderInfo">
            <input type="text" className="orderNo" placeholder="주문번호" />
            <button className="selectBtn">주문 확인</button>
          </div>
          <input type="text" className="title" placeholder="문의제목" />
          <textarea
            maxLength={1000}
            className="inquiry"
            placeholder="문의내용을 입력해주세요.(1,000 자이내)"
          />
          <input className="emailText" type="text" placeholder="이메일" />
          <input
            className="phoneNumber"
            type="text"
            placeholder="휴대폰 번호"
          />
        </form>
        <div className="modalSubmit">
          <button
            className="submitBtn"
            onClick={() => {
              setIsModalOpen(prev => !prev)
            }}
          >
            문의하기
          </button>
        </div>
      </div>
      <div className="layer show" />
    </>
  )
}

export default MyPageModal
