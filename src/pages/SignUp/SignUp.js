import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TermsList from './TermsList'
import { TERMS_BOX } from './termsBox'
import './SignUp.scss'

const SignUp = () => {
  const navigate = useNavigate()
  const passwordRegex =
    /^(?=.*[!@#$%^&*])(?=.*[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣])(?=.*\d).{8,}$/
  const [isOpenTerms, setIsOpenTerms] = useState([false, false, false])
  const [checkItems, setCheckItems] = useState([])
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  })

  const handleUserInfo = e => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const infoValids = {
    email: userInfo.email.includes('@'),
    name: userInfo.name.length >= 2,
    password: passwordRegex.test(userInfo.password),
    passwordConfirm: userInfo.password === userInfo.passwordConfirm,
    terms: checkItems.includes(1) && checkItems.includes(2),
  }

  const isAlValid = Object.values(infoValids).every(el => {
    return el === true
  })

  const signupHandler = () => {
    fetch('http://10.58.52.92:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
        name: userInfo.name,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.messge === 'SIGNUP_SUCCESS') {
          navigate('/login')
        } else if (response.messge === 'DUPLICATE EMAIL') {
          alert('중복된 이메일을 가진 사용자가 존재합니다.')
        } else {
          alert('회원가입에 실패했습니다.')
        }
      })
  }

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id])
    } else {
      setCheckItems(checkItems.filter(el => el !== id))
    }
  }

  const handleAllCheck = checked => {
    if (checked) {
      setCheckItems([1, 2, 3])
    } else {
      setCheckItems([])
    }
  }

  return (
    <div className="signUp">
      <h1 className="signUpTitle">회원가입</h1>
      <div className="infTitle">회원정보</div>
      <ul className="signUpInputContainer">
        {SIGNUP_INPUT.map(info => {
          return (
            <React.Fragment key={info.id}>
              <li>
                <input
                  autoFocus={true}
                  className={
                    !infoValids[info.name] && userInfo[info.name] !== ''
                      ? 'inputError'
                      : 'input'
                  }
                  type={info.type}
                  placeholder={info.placeholder}
                  name={info.name}
                  onChange={handleUserInfo}
                />
              </li>
              {!infoValids[info.name] && userInfo[info.name] !== '' && (
                <p className="errorMsg">{info.error}</p>
              )}
              {infoValids[info.name] && userInfo[info.name] !== '' && (
                <p className="successMsg">{info.success}</p>
              )}
            </React.Fragment>
          )
        })}
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
                  checked={checkItems.length === TERMS_BOX.length}
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
              isOpenTerms={isOpenTerms}
              setIsOpenTerms={setIsOpenTerms}
              index={index}
              termsInf={termsInf}
              handleSingleCheck={handleSingleCheck}
              checkItems={checkItems}
            />
          )
        })}
      </ul>
      <footer className="signUpFooter">
        <button
          className={`signUpBtn ${isAlValid ? 'signUpBtnValid' : ''}`}
          onClick={signupHandler}
          disabled={!isAlValid}
        >
          가입하기
        </button>
      </footer>
    </div>
  )
}

export default SignUp

const SIGNUP_INPUT = [
  {
    id: 1,
    type: 'text',
    placeholder: '이메일',
    name: 'email',
    error: '이메일에 @가 필요합니다',
  },
  {
    id: 2,
    type: 'password',
    placeholder: '비밀번호',
    name: 'password',
    error: '비밀번호는 문자, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요',
  },
  {
    id: 3,
    type: 'password',
    placeholder: '비밀번호 확인',
    name: 'passwordConfirm',
    error: '비밀번호가 일치하지 않습니다',
    success: '비밀번호가 일치합니다',
  },
  {
    id: 4,
    type: 'text',
    placeholder: '이름',
    name: 'name',
    error: '이름을 입력해주세요',
  },
]
