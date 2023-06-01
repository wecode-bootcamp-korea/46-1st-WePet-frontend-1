import React from 'react'
import DETAILINFORMATION_DATA from './detailInformationData'
import './DetailInformation.scss'

const DetailInformation = ({ title, size, manufacture, age, inquire }) => {
  return (
    <div className="detailInformation">
      <table>
        <thead>상품상세정보</thead>
        <tr>
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
        </tr>
      </table>
    </div>
  )
}

export default DetailInformation
