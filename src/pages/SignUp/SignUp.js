import React, { useState } from 'react'
import { TERMS_BOX } from './termsBox'
import TermsList from './TermsList'
import './SignUp.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
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
            className={email === true ? 'inputError' : 'input'}
            type="text"
            placeholder="이메일"
            onChange={e => {
              setEmail(e.target.value)
              {
                e.target.value === '' ? setEmail(true) : setEmail(false)
              }
            }}
          ></input>
        </li>
        {email === true && (
          <p className="errorMsg">이메일은 필수 입력값입니다.</p>
        )}
        <li className="password">
          <input className="input" type="password" placeholder="비밀번호" />
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
            className={name === true ? 'inputError' : 'input'}
            type="text"
            placeholder="이름"
            onChange={e => {
              setName(e.target.value)
              {
                e.target.value === '' ? setName(true) : setName(false)
              }
            }}
          ></input>
        </li>
        {name === true && <p className="errorMsg">이름을 입력해주세요</p>}
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
      <footer className="signUpFooter">
        <button className="signUpBtn">가입하기</button>
      </footer>
    </div>
  )
}

export default SignUp
