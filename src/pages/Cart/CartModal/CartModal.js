import React from 'react'
import './CartModal.scss'

const CartModal = ({
  isModalOpen,
  setIsModalOpen,
  deleteCartItem,
  deleteAllCartItem,
  checkItems,
  cartData,
}) => {
  return (
    <>
      <div className="cartModal">
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
          <button
            className="deleteBtn"
            onClick={() => {
              if (checkItems.length === cartData.length) {
                deleteAllCartItem()
              } else {
                deleteCartItem()
              }
              setIsModalOpen(!isModalOpen)
            }}
          >
            삭제하기
          </button>
        </div>
      </div>
      <div className="layer show" />
    </>
  )
}

export default CartModal
