import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './ProductList.scss'

const ProductList = () => {
  const [dropBox, isOpenDropBox] = useState(false)
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://10.58.52.159:3000/products', {
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setProducts(response.data)
      })
  }, [])

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
              가장 신선하고, 차별화된 유기농 제품으로
            </p>
            <p className="headerContent">우리 아이들의 건강까지 생각합니다 </p>
          </div>
        </header>
        <div className="filterBox">
          <div className="catAndDog">
            <button className="catBtn">고양이</button>
            <button className="dogBtn">강아지</button>
          </div>
          <div className="dropBoxWrapper">
            <button
              className="dropBox"
              onClick={() => {
                isOpenDropBox(prev => !prev)
              }}
            >
              추천순
              <FontAwesomeIcon className="dropBoxArrow" icon={faChevronDown} />
            </button>
            {dropBox && (
              <div className="dropBoxListContainer">
                <div className="dropBoxList">
                  <a className="dropBoxContent">추천순</a>
                  <a className="dropBoxContent">최신순</a>
                  <a className="dropBoxContent">가격높은순</a>
                  <a className="dropBoxContent">가격낮은순</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="productListMain">
          {products.map(
            ({ mainThumbnailImage, productName, productQuantity }) => {
              return (
                <div className="productItem">
                  <img className="productImg" src={mainThumbnailImage} />
                  <div className="productText">
                    <p className="itemIcon" />
                    <p className="itemName">{productName}</p>
                    <p className="itemPrice">{productQuantity}</p>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </>
  )
}

export default ProductList
