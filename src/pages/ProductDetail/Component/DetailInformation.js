import React, { useEffect, useState } from 'react'
import DETAILINFORMATION_DATA from '../Data/detailInformationData'
import './DetailInformation.scss'

const DetailInformation = () => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch('/data/productDetailData.json')
      .then(response => response.json())
      .then(result => setProduct(result))
  }, [])

  return (
    <div className="detailInformation">
      <table>
        <thead>상품상세정보</thead>
        {DETAILINFORMATION_DATA.map(list => {
          return (
            <tr key={list.id}>
              <td className="titleTd">{list.title}</td>
              <td className="contentTd">{product[list.name]}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default DetailInformation
