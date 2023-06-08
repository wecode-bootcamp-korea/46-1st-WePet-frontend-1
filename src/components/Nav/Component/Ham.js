import React from 'react'
import './Ham.scss'

const Ham = ({ isModal, setIsModal }) => {
  return (
    <div
      className="ham"
      onClick={() => {
        setIsModal(prev => !prev)
      }}
    >
      <div className={`line ${isModal && 'hamTopLine'}`} />
      <div className={`line ${isModal && 'hamMidLine'}`} />
      <div className={`line ${isModal && 'hamBtmLine'}`} />
    </div>
  )
}

export default Ham
