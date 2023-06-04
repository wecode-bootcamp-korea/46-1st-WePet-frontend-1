import React, { useEffect, useState } from 'react'
import './Review.scss'

const Review = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/data/reviewData.json')
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
  }, [])

  // if (!data.name || !data.date || data.content) return null

  return (
    <div className="review">
      <div className="reviews">
        <span className="title"> 상품후기({data.length})</span>
        <div className="line" />

        {data.map((data, index) => {
          return (
            <div className="realReview" key={index}>
              <div className="write">
                <span className="name">{data.name}</span>
                <span className="date">{data.date}</span>
              </div>
              <span className="content">{data.content}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Review
