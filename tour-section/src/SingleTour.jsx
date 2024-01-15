import TourDetails from './TourDetails'

const SingleTour = ({ id, info, name, price, image, removeTour }) => {
  return (
    <div className="single-tour">
      <img src={image} alt={name} className="single-tour_img" />
      <span className="single-tour_price">${price}</span>
      <h5 className="single-tour_title">{name}</h5>
      <TourDetails info={info} />
      <button
        type="button"
        className=" btn single-tour_clearbtn"
        onClick={() => {
          removeTour(id)
        }}
      >
        not interested
      </button>
    </div>
  )
}
export default SingleTour
