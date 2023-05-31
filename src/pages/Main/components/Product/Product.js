import React from 'react'
import './Product.scss'

function Product() {
  return (
    <div className="product">
      <div className="productList">
        {PRODUCT_DATA.map((item, index) => {
          return (
            <div key={index} className="productItem">
              <img
                className="productImg"
                src={item.url}
                alt={`${item.name} productImg`}
              />
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
  )
}
export default Product

const PRODUCT_DATA = [
  {
    id: 1,
    icon: 'BEST',
    name: '맥주',
    price: '1000원',
    url: 'https://via.placeholder.com/600/24f355',
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
