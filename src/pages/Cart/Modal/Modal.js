import React from 'react'
import './Modal.scss'

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <div className="modal">
        <div className="modalText">
          <p>선택된 상품을 삭제하시겠습니까?</p>
        </div>
        <div className="modalBtn">
          <button
            className="cancelBtn"
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
          >
            취소
          </button>
          <button className="deleteBtn">삭제하기</button>
        </div>
      </div>
      <div className="layer show" />
    </>
  )
}

export default Modal
