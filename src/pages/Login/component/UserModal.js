import React from 'react'
import { useNavigate } from 'react-router-dom'
import './UserModal.scss'

const UserModal = ({ text, isOpenModal, setIsOpenModal, messageNum }) => {
  const navigate = useNavigate()

  const goToMain = () => {
    setIsOpenModal(prev => !prev)
    if (isOpenModal) return setIsOpenModal(false)
  }

  return (
    <div className="userModal">
      <div className="userModalContent">
        <div className="title">
          <div className="ham" onClick={goToMain}>
            <div className="line hamTopLine" />
            <div className="line hamBtmLine" />
          </div>
          <div className="modalTitle">앗!</div>
          <span className="text">{text}</span>
        </div>
      </div>
    </div>
  )
}

export default UserModal
