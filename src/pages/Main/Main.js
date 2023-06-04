import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Product from './components/Product/Product'
import Slider from './components/Slider/Slider'
import Banner from './components/Banner/Banner'
import Banner_Toy from './assets/Banner_Toy.jpg'
import Banner_Food from './assets/Banner_Food.jpg'
import './Main.scss'

const Main = () => {
  return (
    <div className="main">
      <Carousel />
      <div className="mainSection">
        <Banner src={Banner_Food} text={BANNER_DATA.food} />
        <Slider data={SLIDER_TYPE.food} />
        <h2 className="popularTitle">요즘 잘 나가요</h2>
        <Product sort={RECOMMEND_TYPE.first} />
        <Banner src={Banner_Toy} text={BANNER_DATA.toy} />
        <Slider data={SLIDER_TYPE.toy} />
        <h2 className="newTitle">새로 나왔어요</h2>
        <Product sort={RECOMMEND_TYPE.first} />
      </div>
    </div>
  )
}

export default Main

const BANNER_DATA = {
  toy: `우리애들\n행복하게`,
  food: `우리애들\n배부르게`,
}

const RECOMMEND_TYPE = {
  first: 'popular',
  second: 'new',
}

const SLIDER_TYPE = {
  food: 2,
  toy: 3,
}
