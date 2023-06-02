import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const [signInfo, setSignInfo] = useState({ email: '', password: '' })
  const [emailError, setEmailError] = useState(false)
  const [pwError, setPwError] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const signIn = () => {
    fetch('http://10.58.52.150:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: signInfo.email,
        password: signInfo.password,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        if (response.success === true) {
          //여기바꾸고
          localStorage.setItem('TOKEN', response.data.accessToken) //여기바꾸고
          navigate('/main')
        } else {
          alert('로그인에 실패하셨습니다.')
        }
      })
  }

  useEffect(() => {
    setIsValid(signInfo.email && signInfo.password)
  }, [signInfo])

  return (
    <div className="wePetContainer">
      <div className="signIn">
        <h1 className="loginTitle">로그인</h1>
        <ul className="loginInputContainer">
          <li className="inputBox">
            <input
              autoFocus={true}
              className={emailError ? 'inputError' : 'input'}
              type="text"
              placeholder="이메일"
              onChange={e => {
                setSignInfo(prev => {
                  return { ...prev, email: e.target.value }
                })

                {
                  e.target.value === ''
                    ? setEmailError(true)
                    : setEmailError(false)
                }
              }}
            />
          </li>
          {emailError && <p className="errorMsg">이메일을 입력해주세요</p>}
          <li className="inputBox">
            <input
              autoFocus={true}
              className={pwError ? 'inputError' : 'input'}
              type="password"
              placeholder="비밀번호"
              onChange={e => {
                setSignInfo(prev => {
                  return { ...prev, password: e.target.value }
                })
                {
                  e.target.value === '' ? setPwError(true) : setPwError(false)
                }
              }}
            />
          </li>
          {pwError && <p className="errorMsg">비밀번호를 입력해주세요</p>}
        </ul>
        <div className="saveEmail">
          <label>
            <span>
              <input type="checkbox" />
              아이디저장
            </span>
          </label>
        </div>
        <button
          className={`loginBtn ${isValid ? 'valid' : ''}`}
          onClick={signIn}
          disabled={!isValid}
        >
          로그인
        </button>
        <div className="toSignUpBox">
          <a className="toSignUp">회원가입</a>
        </div>
      </div>
    </div>
  )
}

export default Login
