import React from 'react'
import './MyPage.scss'

const MyPage = () => {
  return (
    <div className="myPage">
      <div className="myPageHeader">
        <span className="headerTitle">마이페이지</span>
      </div>
      <main className="myPageSection">
        <aside className="myPageMenu">
          <ul className="menuBox">
            <div className="menuTitle">쇼핑 정보</div>
            {SHOPPING_DATA.map((menu, index) => {
              return (
                <li key={index} className="menuText">
                  <a href="/">{menu}</a>
                </li>
              )
            })}
          </ul>
          <ul className="menuBox">
            <div className="menuTitle">회원 정보</div>
            {USER_DATA.map((menu, index) => {
              return (
                <li key={index} className="menuText">
                  <a href="/">{menu}</a>
                </li>
              )
            })}
          </ul>
          <ul className="menuBox">
            <div className="menuTitle">고객 센터</div>
            {QNA_DATA.map((menu, index) => {
              return (
                <li key={index} className="menuText">
                  <a href="/">{menu}</a>
                </li>
              )
            })}
          </ul>
        </aside>
        <section className="myPageContainer">
          <div className="userContainer">
            <h4 className="welcome">
              반가워요,
              <p>
                <b>WePet</b>님
              </p>
            </h4>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MyPage

const SHOPPING_DATA = [
  '주문/배송조회',
  '취소/반품/교환 내역',
  '나의 상품 후기',
  '쿠폰함',
]

const USER_DATA = ['회원정보 변경', '배송지 관리']
const QNA_DATA = ['1:1 문의 내역', '이메일 문의']
