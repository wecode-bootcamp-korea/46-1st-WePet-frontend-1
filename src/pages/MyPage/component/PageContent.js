import React, { useState } from 'react'
import MyPageModal from './MyPageModal'
import './PageContent.scss'

const PageContent = ({ title, content, button }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="pageContent">
      <div className="pageContentHeader">
        {isModalOpen && (
          <div className="modalLayout">
            <div className="modalLayer" />
            <MyPageModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        )}
        <h1 className="pageContentTitle">{title}</h1>
        {button && (
          <button
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
          >
            {button}
          </button>
        )}
      </div>
      <div className="pageContentText">
        <h3>앗!</h3>
        <div className="text">{content}</div>
      </div>
    </div>
  )
}

export default PageContent
