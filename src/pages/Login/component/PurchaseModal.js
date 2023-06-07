import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister } from '@fortawesome/free-solid-svg-icons'

import './PurchaseModal.scss'

const PurchaseModal = ({ text, isOpenModal, setIsOpenModal }) => {
  const navigate = useNavigate()

  const goToMain = () => {
    if (isOpenModal === false) {
      navigate('/login')
    }
  }
  return (
    <div className="purchaseModal">
      <div className="purchaseModalContent">
        <div className="title">
          <div
            className="ham"
            onClick={() => {
              // setIsPurchaseModal(prev => !prev)
              goToMain()
            }}
          >
            <div className="line hamTopLine" />
            <div className="line hamBtmLine" />
          </div>
          <FontAwesomeIcon icon={faCashRegister} className="icon" size="lg" />
          <span className="text">{text}</span>
        </div>
      </div>
    </div>
  )
}

export default PurchaseModal
