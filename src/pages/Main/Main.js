import React, { useEffect, useState } from 'react'

import Carousel from './components/Carousel/Carousel'
import Product from './components/Product/Product'
import Slider from './components/Slider/Slider'
import Banner from './components/Banner/Banner'
import './Main.scss'

const Main = () => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch('http://10.58.52.150:3000/products')
      .then(response => response.json())
      .then(data => setProductData(data.data))
  }, [])

  return (
    <div className="main">
      <Carousel />
      <Banner />
      {productData && (
        <>
          <Slider productData={productData} />
          <h2 className="popularTitle">요즘 잘 나가요</h2>
          <Product productData={productData} />
          <Banner />
          <Slider productData={productData} />
          <h2 className="newTitle">새로 나왔어요</h2>
          <Product productData={productData} />
        </>
      )}
    </div>
  )
}

export default Main
