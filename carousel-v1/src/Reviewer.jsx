import { BsQuote } from 'react-icons/bs'

const Reviewer = ({ currentReview }) => {
  const { name, job, image, text } = currentReview
  return (
    <>
      <div className="reviewer-pic">
        <img src={image} alt={name} className="img" />
        <div className="image-border"></div>
        <div className="quote">
          <BsQuote />
        </div>
      </div>
      <h4 className="reviewer-name">{name}</h4>
      <h5 className="reviewer-job">{job}</h5>
      <p className="reviewer-comment">{text}</p>
    </>
  )
}
export default Reviewer
