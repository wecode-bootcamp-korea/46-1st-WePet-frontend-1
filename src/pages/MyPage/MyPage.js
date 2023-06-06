import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageContent from './component/PageContent'
import './MyPage.scss'

const MyPage = () => {
  const params = useParams()
  const id = params.id
  const [myPageData, setMyPageData] = useState([])

  useEffect(() => {
    fetch('/data/myPage.json')
      .then(res => res.json())
      .then(data => {
        setMyPageData(data)
      })
  }, [])

  const pageContent = myPageData.find(item => item.menuParam === id)

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
                  <Link to={`/mypage/${ENG_TITLE[menu]}`}>{menu}</Link>
                </li>
              )
            })}
          </ul>
          <ul className="menuBox">
            <div className="menuTitle">회원 정보</div>
            {USER_DATA.map((menu, index) => {
              return (
                <li key={index} className="menuText">
                  <Link to={`/mypage/${ENG_TITLE[menu]}`}>{menu}</Link>
                </li>
              )
            })}
          </ul>
          <ul className="menuBox">
            <div className="menuTitle">고객 센터</div>
            <li className="menuText">
              <Link to="/mypage/qna">1:1 문의 내역</Link>
            </li>
            <li className="menuText">
              <a href="mailto:@">이메일 문의</a>
            </li>
          </ul>
        </aside>
        <section className="myPageContainer">
          <div className="userContainer">
            {pageContent ? (
              <PageContent
                title={pageContent.title}
                content={pageContent.content}
                button={pageContent.button}
              />
            ) : (
              <h4 className="welcome">
                반가워요,
                <p>
                  <b>WePet</b>님
                </p>
              </h4>
            )}
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
  '포인트',
]

const USER_DATA = ['회원정보 변경', '배송지 관리']
const ENG_TITLE = {
  '주문/배송조회': 'order',
  '취소/반품/교환 내역': 'claim',
  '나의 상품 후기': 'review',
  포인트: 'coupon',
  '회원정보 변경': 'member',
  '배송지 관리': 'address',
  '1:1 문의 내역': 'qna',
}
