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
      <div className={`line ${isModal && 'hamTopLine'}`}></div>
      <div className={`line ${isModal && 'hamMidLine'}`}></div>
      <div className={`line ${isModal && 'hamBtmLine'}`}></div>
    </div>
  )
}

export default Ham
