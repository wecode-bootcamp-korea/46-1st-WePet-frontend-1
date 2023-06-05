import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './TermsList.scss'

const TermsList = ({
  isOpenTerms,
  setIsOpenTerms,
  index,
  termsInf,
  handleSingleCheck,
  checkItems,
}) => {
  return (
    <>
      <li className="termsList">
        <div>
          <label>
            <span>
              <input
                type="checkbox"
                onChange={e => handleSingleCheck(e.target.checked, termsInf.id)}
                checked={checkItems.includes(termsInf.id)}
              />
              {termsInf.subject}
            </span>
          </label>
        </div>
        <button
          className="termsBtn"
          onClick={() => {
            setIsOpenTerms(prev => {
              prev[index] = !prev[index]
              return [...prev]
            })
          }}
        >
          <FontAwesomeIcon className="arrow" icon={faChevronDown} />
        </button>
      </li>
      {isOpenTerms[index] && (
        <textarea className="termsText" disabled>
          {termsInf.content}
        </textarea>
      )}
    </>
  )
}

export default TermsList
