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
                  props.handleSingleCheck(e.target.checked, props.index)
                }
                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                checked={props.checkItems.includes(props.index) ? true : false}
              />
              {props.termsInf.subject}
            </span>
          </label>
        </div>
        <button
          className="termsBtn"
          onClick={() => {
            props.setTermsOn(prev => {
              prev[props.index] = !prev[props.index]
              return [...prev]
            })
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} style={{ color: '#060709' }} />
        </button>
      </li>
      {!props.termsOn[props.index] ? null : (
        <textarea className="termsText" disabled>
          {props.termsInf.content}
        </textarea>
      )}
    </>
  )
}

export default TermsList
