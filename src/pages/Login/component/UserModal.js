import React from 'react'
import { useNavigate } from 'react-router-dom'

import './UserModal.scss'

const UserModal = ({ text, isOpenModal, setIsOpenModal }) => {
  const navigate = useNavigate()

  const goToMain = () => {
    if (isOpenModal === true) {
      navigate('/login')
    }
  }
  return (
    <div className="userModal">
      <div className="userModalContent">
        <div className="title">
          <div
            className="ham"
            onClick={() => {
              setIsOpenModal(prev => !prev)
              goToMain()
            }}
          >
            <div className="line hamTopLine" />
            <div className="line hamBtmLine" />
          </div>
          <div className="modalTitle">앗</div>
          <span className="text">{text}</span>
        </div>
      </div>
    </div>
  )
}

export default UserModal
