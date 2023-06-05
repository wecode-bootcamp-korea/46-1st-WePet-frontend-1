import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const [signInfo, setSignInfo] = useState({ email: '', password: '' })
  const [isErrors, setIsErrors] = useState({
    email: false,
    password: false,
  })

  const isError = Object.values(isErrors).every(el => {
    return el === false
  })

  const signValidation = Object.values(signInfo).every(el => {
    return el !== ''
  })

  const isAllValidation = isError && signValidation

  const signIn = () => {
    fetch('http://10.58.52.245:3000/users/login', {
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
        if (response.messge === 'LOGIN_SUCCESS') {
          // localStorage.setItem('TOKEN', response.data.accessToken) 추가구현예정
          navigate('/main')
        } else {
          alert('로그인에 실패하셨습니다.')
        }
      })
  }

  const handleSignInfo = e => {
    const { name, value } = e.target
    setSignInfo(prev => ({ ...prev, [name]: value }))
    setIsErrors(prev => {
      if (value === '') {
        return { ...prev, [name]: true }
      } else {
        return { ...prev, [name]: false }
      }
    })
  }

  return (
    <div className="Login">
      <div className="signIn">
        <h1 className="loginTitle">로그인</h1>
        <ul className="loginInputContainer">
          {LOGIN_INPUT.map(info => {
            return (
              <React.Fragment key={info.id}>
                <li className="inputBox">
                  <input
                    autoFocus={true}
                    className={isErrors[info.name] ? 'inputError' : 'input'}
                    type={info.type}
                    placeholder={info.placeholder}
                    name={info.name}
                    onChange={handleSignInfo}
                  />
                </li>
                {isErrors[info.name] && (
                  <p className="errorMsg">{info.error}</p>
                )}
              </React.Fragment>
            )
          })}
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
          className={`loginBtn ${isAllValidation ? 'valid' : ''}`}
          onClick={signIn}
          disabled={!isAllValidation}
        >
          로그인
        </button>
        <div className="toSignUpBox">
          <Link className="toSignUp" to="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

const LOGIN_INPUT = [
  {
    id: 1,
    type: 'text',
    placeholder: '이메일',
    name: 'email',
    error: '이메일을 입력해주세요',
  },
  {
    id: 2,
    type: 'password',
    placeholder: '비밀번호',
    name: 'password',
    error: '비밀번호를 입력해주세요',
  },
]
