import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './ProductList.scss'

const ProductList = () => {
  const [dropBox, isOpenDropBox] = useState(false)
  const [products, setProducts] = useState([])
  fetch('http://10.58.52.150:3000/products', {
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
    .then(response => response.json())
    .then(response => {
      setProducts(response.data)
    })

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
              가장 신선하고, 건강한 유기농 제품으로
            </p>
            <p className="headerContent">우리 아이들의</p>
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
              isOpenDropBox(prev => !prev)
            }}
          >
            추천순
            <FontAwesomeIcon className="dropBoxArrow" icon={faChevronDown} />
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
          {products.map((item, idx) => {
            return (
              <div className="productItem" key={idx}>
                <img className="productImg" src={item.productImage} />
                <div className="productText">
                  <p className="itemIcon">{item.icon}</p>
                  <p className="itemName">{item.productName}</p>
                  <p className="itemPrice">{item.productQuantity}</p>
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

// const PRODUCT_DATA = [
//   {
//     id: 1,
//     icon: 'BEST',
//     name: '맥주',
//     price: '1000원',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
//   {
//     id: 2,
//     icon: 'BEST',
//     name: '맥주',
//     price: '1000원',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
//   {
//     id: 3,
//     icon: 'BEST',
//     name: '맥주',
//     price: '1000원',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
//   {
//     id: 4,
//     icon: 'BEST',
//     name: '맥주',
//     price: '1000원',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
//   {
//     id: 5,
//     icon: 'BEST',
//     name: '맥주',
//     price: '1000원',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
//   {
//     id: 6,
//     icon: 'BEST',
//     name: '맥주',
//     price: '1000원',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
//   {
//     id: 7,
//     icon: 'BEST',
//     name: '맥주',
//     price: '1000원',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
//   {
//     id: 8,
//     icon: 'BEST',
//     name: '맥주',
//     price: '1000원',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
// ]
