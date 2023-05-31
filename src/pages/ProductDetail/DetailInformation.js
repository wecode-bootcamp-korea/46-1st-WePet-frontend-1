import React from 'react'
import DETAILINFORMATION_DATA from './detailInformationData'
import './DetailInformation.scss'

const DetailInformation = ({ title, size, manufacture, age, inquire }) => {
  return (
    <div className="detailInformation">
      <table>
        <thead>상품상세정보</thead>
        <tr>
          <td className="titleTd">상품명</td>
          <td className="contentTd">{DETAILINFORMATION_DATA[0].title}</td>
        </tr>
        <tr>
          <td className="titleTd">사이즈</td>
          <td className="contentTd">{DETAILINFORMATION_DATA[0].size}</td>
        </tr>
        <tr>
          <td className="titleTd">제조국</td>
          <td className="contentTd">{DETAILINFORMATION_DATA[0].manufacture}</td>
        </tr>
        <tr>
          <td className="titleTd">사용연령</td>
          <td className="contentTd">{DETAILINFORMATION_DATA[0].age}</td>
        </tr>
        <tr>
          <td className="titleTd">문의</td>
          <td className="contentTd">{DETAILINFORMATION_DATA[0].inquire}</td>
        </tr>
      </table>
    </div>
  )
}

export default DetailInformation
