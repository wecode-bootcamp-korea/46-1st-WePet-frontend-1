import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Product.scss'

function Product({ sort }) {
  const [recommendData, setRecommendData] = useState([])

  useEffect(() => {
    fetch(
      `http://10.58.52.176:8001/products/filter?orderBy=${sort}&offset=0&limit=10`
    )
      .then(response => response.json())
      .then(data => setRecommendData(data.data))
  }, [])

  return (
    <div className="product">
      <div className="productList">
        {recommendData.map(item => {
          return (
            <Link to={`products/${item.productId}`} key={item.id}>
              <div className="productItem">
                <img
                  className="productImg"
                  src={item.main_image_thumbnail}
                  alt={`${item.product_name} productImg`}
                />
                <div className="productText">
                  <p className="itemIcon">{item.icon}</p>
                  <p className="itemName">{item.product_name}</p>
                  <p className="itemPrice">{item.product_price}</p>
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
