import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Count from './Component/Count'
import DetailInformation from './Component/DetailInformation'
import ImgCarousel from './Component/ImgCarousel'
import Review from './Component/Review'
import GoToTop from './Component/GoToTop'

import './ProductDetail.scss'

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0)
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('/data/productData.json')
      .then(response => response.json())
      .then(result => setData(result))
  }, [])

  let detailImgArr = data.detailImg

  if (!data.price) return null

  return (
    <div className="productDetail">
      <div className="product">
        <div className="productLeft">
          <p className="productName">{data.title}</p>
          <p className="price">{data.price.toLocaleString()}원</p>
        </div>

        <ImgCarousel />

        <div className="productRight">
          <div className="line" />
          <p>배송정보</p>
          <p className="grey">3,000원 &#40; 30,000원 이상 구매 시 무료&#41;</p>
          <p className="grey">오후 1시 당일배송마감</p>
          <div className="line" />
          <div className="greyBox">
            <p className="title">{data.title}</p>
            <div className="countPrice">
              <Count quantity={quantity} setQuantity={setQuantity} />
              <p>{(quantity * data.price).toLocaleString()}원</p>
            </div>
          </div>
          <div className="totalPrice">
            <span>총 금액</span>
            <span>{(quantity * data.price).toLocaleString()}원</span>
          </div>
          <div className="shoppingBtn">
            <Link to="/cart">
              <div className="cartBtn">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="lg"
                  className="cartIcon"
                />
              </div>
            </Link>
            <Link to="/purchase">
              <button className="buy">바로 구매하기</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="rowLine" />
      <div className="table">
        <span
          className="greyTitle"
          onClick={() => {
            const element = document.querySelector('.detailInformationBox')
            if (element) {
              const y = element.getBoundingClientRect().top + window.pageYOffset
              window.scrollTo({ top: y, behavior: 'smooth' })
            }
          }}
        >
          상품정보
        </span>
        <div className="columnLine" />
        <span
          className="greyTitle"
          onClick={() => {
            const element = document.querySelector('.detailInformationBox')
            if (element) {
              const y = element.getBoundingClientRect().top + window.pageYOffset
              window.scrollTo({ top: y, behavior: 'smooth' })
            }
          }}
        >
          기본정보
        </span>
        <div className="columnLine" />
        <span
          className="greyTitle"
          onClick={() => {
            const element = document.querySelector('.reviewBox')
            if (element) {
              const y = element.getBoundingClientRect().top + window.pageYOffset
              window.scrollTo({ top: y, behavior: 'smooth' })
            }
          }}
        >
          상품후기
        </span>
      </div>
      <div className="rowLine" />
      <div className="productImgs">
        {detailImgArr.map((img, id) => {
          return <img key={id} src={img} alt="productImages" />
        })}
      </div>
      <div className="detailInformationBox">
        <DetailInformation />
      </div>
      <div className="reviewBox">
        <Review />
      </div>
      <div
        className="goToTopIcon"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        <GoToTop />
      </div>
    </div>
  )
}

export default ProductDetail
