import React from 'react'
import './MyPageModal.scss'

const MyPageModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <div className="myPageModal">
        <form className="modalText">
          <h1 className="modalTitle">1:1 문의 작성</h1>
          <input type="text" placeholder="항목을 선택해주세요" />
          <div className="orderInfo">
            <input type="text" placeholder="주문번호" />
            <button>주문번호 선택</button>
          </div>
          <input type="text" placeholder="문의제목" />
          <textarea
            maxLength={1000}
            placeholder="문의내용을 입력해주세요.(1,000 자이내)"
          />
          <input type="text" placeholder="이메일" />
          <input type="text" placeholder="휴대폰 번호" />
        </form>
        <div className="modalBtn">
          <button
            className="submitBtn"
            onClick={() => {
              setIsModalOpen(!isModalOpen)
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
