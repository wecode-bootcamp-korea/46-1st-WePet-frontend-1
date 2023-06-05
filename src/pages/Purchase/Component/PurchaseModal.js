import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister } from '@fortawesome/free-solid-svg-icons'
import './PurchaseModal.scss'

const PurchaseModal = ({
  isPurchaseModal,
  setIsPurchaseModal,
  setIsPurchaseModalValue,
}) => {
  return (
    <div className="purchaseModal">
      <div className="purchaseModalContent">
        <div className="title">
          <div
            className="ham"
            onClick={() => {
              setIsPurchaseModal(prev => !prev)
            }}
          >
            <div className="line hamTopLine" />
            <div className="line hamBtmLine" />
          </div>
          <FontAwesomeIcon icon={faCashRegister} className="icon" size="lg" />
          <span className="text">
            {setIsPurchaseModalValue
              ? '결제가 완료되었습니다 !'
              : '포인트가 부족합니다 !'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PurchaseModal
