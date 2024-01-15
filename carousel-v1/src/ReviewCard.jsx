import { useState } from 'react'
import { reviews } from './data'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import Reviewer from './Reviewer'

const ReviewCard = () => {
  const [index, setIndex] = useState(0)
  const currentReview = reviews[index]
  const previousReview = () => {
    setIndex((current) => {
      const newIndex = (current - 1 + reviews.length) % reviews.length
      return newIndex
    })
  }
  const nextReview = () => {
    setIndex((current) => {
      const newIndex = (current + 1) % reviews.length
      return newIndex
    })
  }
  const randomReview = () => {
    let randomNum = Math.floor(Math.random() * reviews.length)
    if (randomNum === index) {
      randomNum = randomNum + 1
    }
    const newIndex = randomNum % reviews.length
    return setIndex(newIndex)
  }

  return (
    <div className="review-card">
      <Reviewer currentReview={currentReview} />
      <div className="change-btn">
        <button type="button" className="btn" onClick={previousReview}>
          <IoIosArrowBack />
        </button>
        <button type="button" className="btn" onClick={nextReview}>
          <IoIosArrowForward />
        </button>
      </div>
      <button type="button" className="btn random-btn" onClick={randomReview}>
        surprise me
      </button>
    </div>
  )
}
export default ReviewCard
