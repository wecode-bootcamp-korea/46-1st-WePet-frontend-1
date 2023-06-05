import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './GoToTop.scss'

const GoToTop = () => {
  return (
    <div className="goToTop">
      <FontAwesomeIcon icon={faChevronUp} size="2xl" className="icon" />
    </div>
  )
}

export default GoToTop
