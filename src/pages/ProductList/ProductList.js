import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './ProductList.scss'

const ProductList = () => {
  let { id } = useParams()

  const [dropBox, isOpenDropBox] = useState(false)
  const [products, setProducts] = useState([])
  const [orderBy, setOrderBy] = useState('newest')

  useEffect(() => {
    fetch(
      `http://10.58.52.246:8001/products/filter?offset=0&limit=11&orderBy=${orderBy}&categoryId=${id}`,
      {
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
      }
    )
      .then(response => response.json())
      .then(response => {
        setProducts(response.data)
      })
  }, [orderBy])

  return (
    <>
      <div className="productList">
        <header className="productListHeader">
          <h1 className="productListTitle">
            {HEADER_DATA[id].title}
            <sup className="totalQuantity">총 {products.length} 개</sup>
          </h1>

          <div className="headerContentBox">
            <p
              className="headerContent"
              dangerouslySetInnerHTML={{ __html: HEADER_DATA[id].descripion }}
            ></p>
          </div>
        </header>
        <div className="filterBox">
          <div className="dropBoxWrapper">
            <button
              className="dropBox"
              onClick={() => {
                isOpenDropBox(prev => !prev)
              }}
            >
              추천순
              <FontAwesomeIcon className="dropBoxArrow" icon={faChevronDown} />
            </button>
            {dropBox && (
              <div className="dropBoxListContainer">
                <div className="dropBoxList">
                  {DROP_BOX.map(({ title, key }) => {
                    return (
                      <span
                        className="dropBoxContent"
                        onClick={() => {
                          setOrderBy(key)
                        }}
                      >
                        {title}
                      </span>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="productListMain">
          {products.map(
            ({
              product_category_id,
              main_image_thumbnail,
              product_name,
              product_price,
            }) => {
              return (
                <Link to={`/products/${product_category_id}`}>
                  <div className="productItem">
                    <img className="productImg" src={main_image_thumbnail} />
                    <div className="productText">
                      <p className="itemIcon" />
                      <p className="itemName">{product_name}</p>
                      <p className="itemPrice">{product_price}</p>
                    </div>
                  </div>
                </Link>
              )
            }
          )}
        </div>
      </div>
    </>
  )
}

export default ProductList

const HEADER_DATA = {
  0: { title: '전체', descripion: '여기에 다 있어요!' },
  1: {
    title: '사료',
    descripion:
      '가장 신선하고, 차별화된 유기농 제품으로 <br><br> 우리 아이들의 건강까지 생각합니다',
  },
  2: {
    title: '간식',
    descripion:
      '가장 신선하고, 차별화된 유기농 제품으로<br><br>  우리 아이들의 건강까지 생각합니다',
  },
  3: {
    title: '용품',
    descripion:
      '가장 신선하고, 차별화된 유기농 제품으로<br><br>  우리 아이들의 건강까지 생각합니다',
  },
}

const DROP_BOX = [
  { title: '추천순', key: 'newest' },
  { title: '최신순', key: 'newest' },
  { title: '높은가격순', key: 'priceDESC' },
  { title: '낮은가격순', key: 'priceASC' },
]
