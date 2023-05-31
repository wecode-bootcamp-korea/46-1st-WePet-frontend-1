import React, { useState } from 'react'
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [pwError, setPwError] = useState(false)

  const signIn = () => {
    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: email,
        password: pw,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.data === null) {
          alert('로그인실패')
        } else {
          alert('로그인성공')
          localStorage.setItem('access_token', response.data.accessToken)
        }
      })
  }

  return (
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
              setEmail(e.target.value)
              {
                e.target.value === ''
                  ? setEmailError(true)
                  : setEmailError(false)
              }
            }}
          ></input>
        </li>
        {emailError && <p className="errorMsg">이메일을 입력해주세요</p>}
        <li className="inputBox">
          <input
            className="input"
            type="password"
            placeholder="비밀번호"
            onChange={e => {
              setPw(e.target.value)
              e.target.value === '' ? setPwError(true) : setPwError(false)
            }}
          ></input>
        </li>
        {pwError ? <p className="errorMsg">비밀번호를 입력해주세요</p> : null}
      </ul>
      <div className="saveEmail">
        <label>
          <span>
            <input type="checkbox" />
            아이디저장
          </span>
        </label>
      </div>
      <button className="loginBtn" onClick={signIn}>
        로그인
      </button>
      <a className="toSignUp">회원가입</a>
    </div>
  )
}

export default Login
