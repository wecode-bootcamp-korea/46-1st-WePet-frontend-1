import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { APIS } from '../../../../config'
import './Product.scss'

function Product({ sort }) {
  const [recommendData, setRecommendData] = useState([])

  useEffect(() => {
    fetch(`${APIS.product}/filter?orderBy=${sort}&offset=0&limit=10`)
      .then(response => response.json())
      .then(data => setRecommendData(data.data))
  }, [])

  return (
    <div className="product">
      <div className="productDisplay">
        {recommendData.map(item => {
          return (
            <Link to={`products/details/${item.productId}`} key={item.id}>
              <div className="productItem">
                <img
                  className="productImg"
                  src={item.productImage}
                  alt={`${item.productName} productImg`}
                />
                <div className="productText">
                  <p className="itemIcon">{item.icon}</p>
                  <p className="itemName">{item.productName}</p>
                  <p className="itemPrice">{`${parseFloat(
                    item.productPrice
                  ).toLocaleString()}원`}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Product
