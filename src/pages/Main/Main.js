import React, { useEffect, useState } from 'react'
import Carousel from './components/Carousel/Carousel'
import Product from './components/Product/Product'
import Slider from './components/Slider/Slider'
import Banner from './components/Banner/Banner'
import './Main.scss'

const Main = () => {
  useEffect(() => {
    fetch('http://10.58.52.148:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => setProductData(data))
  }, [])

  const [productData, setProductData] = useState([])

  return (
    <div className="main">
      <Carousel />
      <Banner />
      <Slider productData={productData} />
      <h2 className="popularTitle">요즘 잘 나가요</h2>
      <Product productData={productData} />
      <Banner />
      <Slider productData={productData} />
      <h2 className="newTitle">새로 나왔어요</h2>
      <Product productData={productData} />
    </div>
  )
}

export default Main
