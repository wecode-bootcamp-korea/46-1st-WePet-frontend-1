import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductDetail.scss'

const data = {
  title: 'WePet Food',
  price: '3,500원',
  productImg: '../../../public/images/still-life-pets-food-assortment.jpg',
}

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="product">
        <div className="productLeft">
          <span>{data.title}</span>
          <span>{data.price}</span>
        </div>
        <div className="productMainImg">
          <img src={data.productImg} />
        </div>
        <div className="productRight"></div>
      </div>
    </div>
  )
}

export default ProductDetail
