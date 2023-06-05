import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister } from '@fortawesome/free-solid-svg-icons'
import './PurchaseModal.scss'

const PurchaseModal = () => {
  return (
    <div className="purchaseModal">
      <div className="purchaseModalContent">
        <div className="title">
          <FontAwesomeIcon icon={faCashRegister} className="icon" size="lg" />
          결제가 완료되었습니다 !
        </div>
        <div className="ham lineLeft"></div>
        <div className="ham lineRight"></div>
      </div>
    </div>
  )
}

export default PurchaseModal
