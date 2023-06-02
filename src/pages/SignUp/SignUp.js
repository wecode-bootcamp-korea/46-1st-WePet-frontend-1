import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TermsList from './TermsList'
import { TERMS_BOX } from './termsBox'
import './SignUp.scss'

const SignUp = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [isEmail, setIsEmail] = useState(false)
  const [isName, setIsName] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const [isMatched, setIsMatched] = useState(true)
  const [isAllValid, setIsAllValid] = useState(false)

  const [isOpenTerms, setIsOpenTerms] = useState([false, false, false])
  const [checkItems, setCheckItems] = useState([])

  const signupHandler = () => {
    fetch('http://10.58.52.159:8000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        // if (response.success === true) {
        //   navigate('/main')
        // } else {
        //   alert('회원가입에 실패했습니다.')
        // }
      })
  }

  useEffect(() => {
    if (isEmail && isName && isPassword && isPasswordConfirm && isMatched) {
      const isButton1Checked = checkItems.includes(0)
      const isButton2Checked = checkItems.includes(1)
      setIsAllValid(isButton1Checked && isButton2Checked)
    }
  }, [isEmail, isName, isPassword, isPasswordConfirm, isMatched, checkItems])

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id])
    } else {
      setCheckItems(checkItems.filter(el => el !== id))
    }

    const isButton1Checked = id === 0 ? checked : checkItems.includes(0)
    const isButton2Checked = id === 1 ? checked : checkItems.includes(1)

    setIsAllValid(
      isEmail &&
        isName &&
        isPassword &&
        isPasswordConfirm &&
        isMatched &&
        isButton1Checked &&
        isButton2Checked
    )
  }

  const handleAllCheck = checked => {
    if (checked) {
      const idArray = []
      TERMS_BOX.forEach((el, index) => idArray.push(index))
      setCheckItems(idArray)
    } else {
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
            className={!isEmail && email !== '' ? 'inputError' : 'input'}
            type="text"
            placeholder="이메일"
            onChange={e => {
              setEmail(e.target.value)
              setIsEmail(e.target.value.includes('@'))
            }}
          />
        </li>
        {!isEmail && email !== '' && (
          <p className="errorMsg">이메일에 @가 필요합니다</p>
        )}

        <li>
          <input
            autoFocus={true}
            className={!isPassword && password !== '' ? 'inputError' : 'input'}
            type="password"
            placeholder="비밀번호"
            onChange={e => {
              setPassword(e.target.value)
              setIsPassword(e.target.value.length >= 8)
              setIsMatched(e.target.value === passwordConfirm)
            }}
          />
        </li>

        {!isPassword && password !== '' && (
          <p className="errorMsg">비밀번호 8자리 이상 입력해주세요</p>
        )}

        <li>
          <input
            autoFocus={true}
            className={
              !isPasswordConfirm && passwordConfirm !== ''
                ? 'inputError'
                : 'input'
            }
            type="password"
            placeholder="비밀번호 확인"
            onChange={e => {
              setPasswordConfirm(e.target.value)
              setIsPasswordConfirm(e.target.value.length >= 8)
              setIsMatched(e.target.value === password || password === '')
            }}
          />
        </li>

        {isPassword && passwordConfirm && !isMatched && (
          <p className="errorMsg">비밀번호가 일치하지 않습니다</p>
        )}
        {isPassword && passwordConfirm && isMatched && (
          <p className="successMsg">비밀번호가 일치합니다</p>
        )}

        <li>
          <input
            autoFocus={true}
            className={!isName && name !== '' ? 'inputError' : 'input'}
            type="text"
            placeholder="이름"
            onChange={e => {
              setName(e.target.value)
              setIsName(e.target.value.length >= 2)
            }}
          />
        </li>
        {!isName && name !== '' && (
          <p className="errorMsg">이름을 입력해주세요</p>
        )}
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
          className={`signUpBtn ${isAllValid ? 'signUpBtnValid' : ''}`}
          onClick={signupHandler}
          disabled={!isAllValid}
        >
          가입하기
        </button>
      </footer>
    </div>
  )
}

export default SignUp
