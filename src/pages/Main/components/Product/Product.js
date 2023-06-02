import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Product.scss'

function Product() {
  const location = useLocation()
  const [recommendData, setRecommendData] = useState([])
  const queryString = location.search

  useEffect(() => {
    fetch(`http://10.58.52.159:3000/products/category${queryString}`)
      .then(response => response.json())
      .then(data => setRecommendData(data.data))
  }, [queryString])

  return (
    <div className="product">
      <div className="productList">
        {recommendData.map(item => {
          return (
            <Link to={`products/${item.productId}`} key={item.id}>
              <div className="productItem">
                <img
                  className="productImg"
                  src={item.mainThumbnailImage}
                  alt={`${item.productName} productImg`}
                />
                <div className="productText">
                  <p className="itemIcon">{item.icon}</p>
                  <p className="itemName">{item.productName}</p>
                  <p className="itemPrice">{item.productPrice}</p>
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
