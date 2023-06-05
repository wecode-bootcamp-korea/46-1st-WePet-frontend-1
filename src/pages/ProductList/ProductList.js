import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './ProductList.scss'

const ProductList = () => {
  let { id } = useParams()

  const [dropBox, isOpenDropBox] = useState(false)
  // const [products, setProducts] = useState(EXAMPLE) test용
  const [products, setProducts] = useState([])

  useEffect(() => {
    let url = 'http://10.58.52.159:3000/products'
    if (id !== 0) {
      url += `/category?id=${id}`
    }

    fetch(url, {
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(response => {
        setProducts(response.data)
      })
  }, [])

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
                  {DROP_BOX.map(title => {
                    return <span className="dropBoxContent">{title}</span>
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="productListMain">
          {products.map(
            // {EXAMPLE.map(   test용
            ({
              productId,
              mainThumbnailImage,
              productName,
              productQuantity,
            }) => {
              return (
                <Link to={`/products/${productId}`}>
                  <div className="productItem">
                    <img className="productImg" src={mainThumbnailImage} />
                    <div className="productText">
                      <p className="itemIcon" />
                      <p className="itemName">{productName}</p>
                      <p className="itemPrice">{productQuantity}</p>
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

const DROP_BOX = ['추천순', '최신순', '높은가격순', '낮은가격순']

// const EXAMPLE = [     test용
//   {
//     productId: 3,
//     productName: 'Chewy Chimken',
//     productPrice: '6000.00',
//     productDescription: 'Bite sized snack that taste like KFC ',
//     productCategory: 2,
//     productQuantity: 50,
//     productImage:
//       'https://newmansown.com/wp-content/uploads/2022/04/NO-5oz-_SnackSticks_Chicken_FRNT@2x-1.png',
//   },
//   {
//     productId: 3,
//     productName: 'Chewy Chimken',
//     productPrice: '6000.00',
//     productDescription: 'Bite sized snack that taste like KFC ',
//     productCategory: 2,
//     productQuantity: 50,
//     productImage:
//       'https://newmansown.com/wp-content/uploads/2022/04/NO-5oz-_SnackSticks_Chicken_FRNT@2x-1.png',
//   },
//   {
//     productId: 3,
//     productName: 'Chewy Chimken',
//     productPrice: '6000.00',
//     productDescription: 'Bite sized snack that taste like KFC ',
//     productCategory: 2,
//     productQuantity: 50,
//     productImage:
//       'https://newmansown.com/wp-content/uploads/2022/04/NO-5oz-_SnackSticks_Chicken_FRNT@2x-1.png',
//   },
//   {
//     productId: 3,
//     productName: 'Chewy Chimken',
//     productPrice: '6000.00',
//     productDescription: 'Bite sized snack that taste like KFC ',
//     productCategory: 2,
//     productQuantity: 50,
//     productImage:
//       'https://newmansown.com/wp-content/uploads/2022/04/NO-5oz-_SnackSticks_Chicken_FRNT@2x-1.png',
//   },
// ]
