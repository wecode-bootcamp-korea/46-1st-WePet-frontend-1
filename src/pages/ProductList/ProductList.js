import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './ProductList.scss'

const ProductList = () => {
  const [dropBox, setDropBox] = useState(false)

  return (
    <>
      <div className="productList">
        <header className="productListHeader">
          <h1 className="productListTitle">
            사료
            <sup className="totalQuantity">총 {20}개</sup>
          </h1>

          <div className="headerContentBox">
            <p className="headerContent">
              마음의 양식은 뭐니 뭐니 해도 책이죠.
            </p>
            <p className="headerContent">
              그렇다면 먹는 것을 다루는 책은 얼마나 좋은 양식일까요?
            </p>
            <p className="headerContent">
              맛있는 책들을 보면서 마음까지 배부르게 채워보세요.
            </p>
          </div>
        </header>
        <div className="filterBox">
          <div className="catAndDog">
            <button className="catBtn">고양이</button>
            <button className="dogBtn">강아지</button>
          </div>
          <button
            className="dropBox"
            onClick={() => {
              setDropBox(prev => {
                prev = !prev
                return prev
              })
            }}
          >
            추천순
            <FontAwesomeIcon
              className="dropBoxArrow"
              icon={faChevronDown}
              style={{ color: '#000000' }}
            />
          </button>
        </div>
        {dropBox === false ? null : (
          <div className="dropBoxListContainer">
            <div className="dropBoxList">
              <a className="dropBoxContent">추천순</a>
              <a className="dropBoxContent">최신순</a>
              <a className="dropBoxContent">가격높은순</a>
              <a className="dropBoxContent">가격낮은순</a>
            </div>
          </div>
        )}

        <div className="productListMain">
          {PRODUCT_DATA.map((item, index) => {
            return (
              <div className="productItem">
                <img className="productImg" src={item.url}></img>
                <div className="productText">
                  <p className="itemIcon">{item.icon}</p>
                  <p className="itemName">{item.name}</p>
                  <p className="itemPrice">{item.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProductList

const PRODUCT_DATA = [
  {
    id: 1,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 2,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 3,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 4,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 5,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 6,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 7,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 8,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/92c952',
  },
]
