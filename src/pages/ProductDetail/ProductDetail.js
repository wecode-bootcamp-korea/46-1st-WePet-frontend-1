import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Count from './Count'
import DetailInformation from './DetailInformation'
import PRODUCT_DATA from './productData'
import DETAILINFORMATION_DATA from './detailInformationData'
import './ProductDetail.scss'

const ProductDetail = () => {
  const detailImgArr = PRODUCT_DATA[0].detailImg
  return (
    <div className="productDetail">
      <div className="product">
        <div className="productLeft">
          <p className="productName">{PRODUCT_DATA[0].title}</p>
          <p className="price">{PRODUCT_DATA[0].price}</p>
        </div>

        <div className="productMainImg">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="xl"
            style={{ color: '#000000' }}
            className="arrowLeft"
          />
          <img src={PRODUCT_DATA[0].productImg} alt="productImage" />
          <FontAwesomeIcon
            icon={faChevronRight}
            size="xl"
            style={{ color: '#000000' }}
            className="arrowRight"
          />
        </div>

        <div className="productRight">
          <div className="line" />
          <p>배송정보</p>
          <p className="grey">3,000원 &#40; 30,000원 이상 구매 시 무료&#41;</p>
          <p className="grey">오후 1시 당일배송마감</p>
          <div className="line" />
          <div className="greyBox">
            <p>{PRODUCT_DATA[0].title}</p>
            <Count />
          </div>
          <div className="totalPrice">
            <span>총 금액</span>
            <span>3,500원</span>
          </div>
          <div className="shoppingBtn">
            <div className="cartBtn">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="lg"
                style={{ color: '#ffbb0f' }}
                className="cartIcon"
              />
            </div>
            <button className="buy">바로 구매하기</button>
          </div>
        </div>
      </div>
      <div className="rowLine" />

      <div className="table">
        <span className="greyTitle">상품정보</span>
        <div className="columnLine" />
        <span className="greyTitle">기본정보</span>
        <div className="columnLine" />
        <span className="greyTitle">상품후기</span>
      </div>
      <div className="rowLine" />

      <div className="productImgs">
        {detailImgArr.map((img, index) => {
          // const imgValue = img.value
          // console.log({ img })
          return <img index={index} src={img} alt="productImages" />
        })}
      </div>
      <div className="detailInformationBox">
        <DetailInformation />
      </div>
    </div>
  )
}

export default ProductDetail
