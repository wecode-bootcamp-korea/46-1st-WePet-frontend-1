import React, { useEffect, useState } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { APIS } from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './ProductList.scss'

const ProductList = () => {
  const { id } = useParams()

  const [dropBox, isOpenDropBox] = useState(false)
  const [products, setProducts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.toString()

  useEffect(() => {
    id === '0'
      ? searchParams.delete('categoryId')
      : searchParams.set('categoryId', id)
    setSearchParams(searchParams)
    fetch(`${APIS.product}/filter?offset=0&limit=40&${query}`)
      .then(response => response.json())
      .then(response => {
        setProducts(response.data)
      })
  }, [query, id])

  const handleQueryString = key => {
    searchParams.set('orderBy', key)
    setSearchParams(searchParams)
  }

  return (
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
                {DROP_BOX.map(({ title, key }, index) => {
                  return (
                    <span
                      key={index}
                      className="dropBoxContent"
                      onClick={() => {
                        handleQueryString(key)
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
          ({ productId, productImage, productName, productPrice, index }) => {
            return (
              <Link to={`/products/details/${productId}`}>
                <div className="productItem" key={index}>
                  <img className="productImg" src={productImage} />
                  <div className="productText">
                    <p className="itemName">{productName}</p>
                    <p className="itemPrice">{`${parseFloat(
                      productPrice
                    ).toLocaleString()}원`}</p>
                  </div>
                </div>
              </Link>
            )
          }
        )}
      </div>
    </div>
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
      '편리하고, 안전한 제품들로<br><br> 우리 아이들의 행복한 라이프까지 생각합니다 ',
  },
}

const DROP_BOX = [
  { title: '추천순', key: 'recommended' },
  { title: '최신순', key: 'newest' },
  { title: '높은가격순', key: 'priceDESC' },
  { title: '낮은가격순', key: 'priceASC' },
]
