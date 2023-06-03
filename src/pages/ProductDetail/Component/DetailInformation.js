import React, { useEffect, useState } from 'react'
import DETAILINFORMATION_DATA from '../Data/detailInformationData'
import './DetailInformation.scss'

const DetailInformation = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('/data/productDetailData.json', { method: 'GET' })
      .then(response => response.json())
      .then(result => setData(result))
  }, [])

  return (
    <div className="detailInformation">
      <table>
        <thead>상품상세정보</thead>
        {DETAILINFORMATION_DATA.map(list => {
          return (
            <tr key={list.id}>
              <td className="titleTd">{list.title}</td>
              <td className="contentTd">{data[list.name]}</td>
            </tr>
          )
        })}
        {/* <tr>
          <td className="titleTd">{DETAILINFORMATION_DATA[0].name}</td>
          <td className="contentTd">Q</td>
        </tr>
        <tr>
          <td className="titleTd">{DETAILINFORMATION_DATA[0].size}</td>
          <td className="contentTd">W</td>
        </tr>
        <tr>
          <td className="titleTd">{DETAILINFORMATION_DATA[0].manufacture}</td>
          <td className="contentTd">E</td>
        </tr>
        <tr>
          <td className="titleTd">{DETAILINFORMATION_DATA[0].age}</td>
          <td className="contentTd">R</td>
        </tr>
        <tr>
          <td className="titleTd">{DETAILINFORMATION_DATA[0].inquire}</td>
          <td className="contentTd">D</td>
        </tr> */}
      </table>
    </div>
  )
}

export default DetailInformation
