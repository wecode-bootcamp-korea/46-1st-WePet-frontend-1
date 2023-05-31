import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { TERMS_BOX } from './termsBox'
import './SignUp.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [termsOn, setTermsOn] = useState([false, false, false])
  const [checkItems, setCheckItems] = useState([])

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id])
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter(el => el !== id))
    }
  }

  const handleAllCheck = checked => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = []
      TERMS_BOX.forEach((el, index) => idArray.push(index))
      setCheckItems(idArray)
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([])
    }
  }

  return (
    <div className="signUp">
      <h1 className="signUpTitle">회원가입</h1>
      <div className="infTitle">회원정보</div>
      <ul className="signUpInputContainer">
        <li>
          <input
            autoFocus={true}
            className={emailError ? 'inputError' : 'input'}
            type="text"
            placeholder="이메일"
            onChange={e => {
              setEmail(e.target.value)
              {
                e.target.value === ''
                  ? setEmailError(true)
                  : setEmailError(false)
              }
            }}
          ></input>
        </li>
        {emailError ? (
          <p className="errorMsg">이메일은 필수 입력값입니다.</p>
        ) : null}
        <li className="password">
          <input
            className="input"
            type="password"
            placeholder="비밀번호"
          ></input>
        </li>
        <li>
          <input
            className="input"
            type="password"
            placeholder="비밀번호 확인"
          ></input>
        </li>
        <li>
          <input
            autoFocus={true}
            className={nameError ? 'inputError' : 'input'}
            type="text"
            placeholder="이름"
            onChange={e => {
              setName(e.target.value)
              {
                e.target.value === '' ? setNameError(true) : setNameError(false)
              }
            }}
          ></input>
        </li>
        {nameError ? <p className="errorMsg">이름을 입력해주세요</p> : null}
      </ul>
      <div className="termsTitle">약관동의</div>
      <ul className="termsContainer">
        <li>
          <div className="fullTermsBox">
            <label>
              <span className="fullTermsTitle">
                <input
                  type="checkbox"
                  onChange={e => handleAllCheck(e.target.checked)}
                  // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                  checked={
                    checkItems.length === TERMS_BOX.length ? true : false
                  }
                />
                전체 동의합니다.
              </span>
            </label>
          </div>
          <p className="fullTermsContent">
            선택 항목에 동의하지 않은 경우도 회원가입 및 서비스 이용이
            가능합니다.
          </p>
        </li>
        {TERMS_BOX.map((termsInf, index) => {
          return (
            <TermsList
              termsOn={termsOn}
              setTermsOn={setTermsOn}
              index={index}
              termsInf={termsInf}
              handleSingleCheck={handleSingleCheck}
              checkItems={checkItems}
            />
          )
        })}
      </ul>
      <footer>
        <button className="signUpBtn">가입하기</button>
      </footer>
    </div>
  )
}

export default SignUp

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
