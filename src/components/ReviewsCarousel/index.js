import React, {useState} from 'react'
import './index.css'

const ReviewsCarousel = ({reviewsList}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentReview = reviewsList[currentIndex]

  const onClickLeftArrow = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
  }

  const onClickRightArrow = () => {
    if (currentIndex < reviewsList.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <div className="reviews-app">
      <h1 className="heading">Reviews</h1>
      <div className="review-container">
        <button
          className="arrow-button"
          onClick={onClickLeftArrow}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div className="review-content">
          <img
            src={currentReview.imgUrl}
            alt={currentReview.username}
            className="profile-image"
          />
          <p className="username">{currentReview.username}</p>
          <p className="company">{currentReview.companyName}</p>
          <p className="description">{currentReview.description}</p>
        </div>
        <button
          className="arrow-button"
          onClick={onClickRightArrow}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
