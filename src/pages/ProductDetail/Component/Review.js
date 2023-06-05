import React, { useEffect, useState } from 'react'
import './Review.scss'

const Review = () => {
  const [review, setReview] = useState([])

  useEffect(() => {
    fetch('/data/reviewData.json')
      .then(response => response.json())
      .then(result => {
        setReview(result)
      })
  }, [])

  // if (!data.name || !data.date || data.content) return null

  return (
    <div className="review">
      <div className="reviews">
        <span className="title"> 상품후기({review.length})</span>
        <div className="line" />

        {review.map((review, index) => {
          return (
            <div className="realReview" key={index}>
              <div className="write">
                <span className="name">{review.name}</span>
                <span className="date">{review.date}</span>
              </div>
              <span className="content">{review.content}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Review
