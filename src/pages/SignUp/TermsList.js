import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './TermsList.scss'

const TermsList = props => {
  return (
    <>
      <li className="termsList">
        <div>
          <label>
            <span>
              <input
                type="checkbox"
                onChange={e =>
                  props.handleSingleCheck(e.target.checked, props.termsInf.id)
                }
                checked={props.checkItems.includes(props.termsInf.id)}
              />
              {props.termsInf.subject}
            </span>
          </label>
        </div>
        <button
          className="termsBtn"
          onClick={() => {
            props.setIsOpenTerms(prev => {
              prev[props.index] = !prev[props.index]
              return [...prev]
            })
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} style={{ color: '#060709' }} />
        </button>
      </li>
      {!props.isOpenTerms[props.index] ? null : (
        <textarea className="termsText" disabled>
          {props.termsInf.content}
        </textarea>
      )}
    </>
  )
}

export default TermsList
