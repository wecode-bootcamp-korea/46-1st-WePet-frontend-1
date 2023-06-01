import React from 'react'
import './Product.scss'

function Product({ productData }) {
  return (
    <div className="product">
      <div className="productList">
        {productData.map((item, index) => {
          return (
            <div key={index} className="productItem">
              <img
                className="productImg"
                src={item.productImage}
                alt={`${item.productName} productImg`}
              />
              <div className="productText">
                {/*<p className="itemIcon">{item.icon}</p>*/}
                <p className="itemName">{item.productName}</p>
                <p className="itemPrice">{item.productPrice}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Product
