import React from 'react'
import './PageContent.scss'

const PageContent = ({ title, content, button }) => {
  return (
    <div className="pageContent">
      <div className="pageContentHeader">
        <h1 className="pageContentTitle">{title}</h1>
        {button && <button>{button}</button>}
      </div>
      <div className="pageContentText">
        <h3>앗!</h3>
        <div className="text">{content}</div>
      </div>
    </div>
  )
}

export default PageContent
