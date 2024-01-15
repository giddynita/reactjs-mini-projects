import { useState } from 'react'

const TourDetails = ({ info }) => {
  const [details, setDetails] = useState(false)
  const showLess = () => {
    return setDetails(false)
  }
  const readMore = () => {
    return setDetails(true)
  }
  const split = info.split('').slice(0, 200)
  return (
    <>
      {details ? (
        <p className="single-tour_info">
          {info}
          <button
            type="button"
            className=" single-tour_togglebtn"
            onClick={showLess}
          >
            show less
          </button>
        </p>
      ) : (
        <p className="single-tour_info">
          {split}...
          <button type="" className="single-tour_togglebtn" onClick={readMore}>
            read more
          </button>
        </p>
      )}
    </>
  )
}

export default TourDetails
