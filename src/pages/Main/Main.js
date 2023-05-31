import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Product from './components/Product/Product'
import Slider from './components/Slider/Slider'
import Banner from './components/Banner/Banner'
import './Main.scss'

const Main = () => {
  return (
    <div className="main">
      <Carousel />
      <Banner />
      <Slider />
      <h2 className="popularTitle">요즘 잘 나가요</h2>
      <Product />
      <Banner />
      <Slider />
      <h2 className="newTitle">새로 나왔어요</h2>
      <Product />
    </div>
  )
}

export default Main
