import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Carousel from './components/Carousel/Carousel'
import Product from './components/Product/Product'
import Slider from './components/Slider/Slider'
import Banner from './components/Banner/Banner'
import Banner_Toy from './assets/Banner_Toy.jpg'
import Banner_Food from './assets/Banner_Food.jpg'

import './Main.scss'

const Main = () => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch('http://10.58.52.159:3000/products')
      .then(response => response.json())
      .then(data => setProductData(data.data))
  }, [])

  return (
    <div className="main">
      <Carousel />
      <Banner src={Banner_Food} />
      {productData && (
        <>
          <Slider productData={productData} />
          <h2 className="popularTitle">요즘 잘 나가요</h2>
          <Link to="/products/category?sort=popular">
            <Product />
          </Link>
          <Banner src={Banner_Toy} />
          <Slider productData={productData} />
          <h2 className="newTitle">새로 나왔어요</h2>
          <Link to="/products/category?sort=new">
            <Product />
          </Link>
        </>
      )}
    </div>
  )
}

export default Main
