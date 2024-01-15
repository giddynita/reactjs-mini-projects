import { BsQuote } from 'react-icons/bs'
const Slides = ({ name, title, image, quote, index, currentIndex }) => {
  return (
    <div
      className="slide-container"
      style={{
        transform: `translateX(${100 * (index - currentIndex)}%)`,
        opacity: index === currentIndex ? 1 : 0,
        visible: index === currentIndex ? 'visible' : 'hidden',
      }}
    >
      <img src={image} alt={name} className="slide-img" />
      <h4 className="slide-name">{name}</h4>
      <h5 className="slide-job">{title}</h5>
      <p className="slide-comment">{quote}</p>
      <BsQuote className="slide-quote" />
    </div>
  )
}
export default Slides
