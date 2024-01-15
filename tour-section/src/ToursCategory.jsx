import Error from './Error'
import useFetch from './useFetch'
import SingleTour from './SingleTour'
import { useCallback } from 'react'
import Loading from './Loading'

const url = 'https://course-api.com/react-tours-project'

const ToursCategory = () => {
  const { isLoading, isError, tours, setTours, fetchData } = useFetch(url)
  const removeTour = useCallback((tag) => {
    const newTours = tours.filter((tourList) => tourList.id !== tag)
    setTours(newTours)
  })

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <Error />
  }
  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2 className="heading-title">No more tours</h2>
        <button
          type="button"
          className="btn"
          onClick={() => {
            fetchData()
          }}
        >
          refresh
        </button>
      </div>
    )
  }
  return (
    <div className="tours-category">
      {tours.map((singleTour) => {
        return (
          <SingleTour
            key={singleTour.id}
            removeTour={removeTour}
            {...singleTour}
          />
        )
      })}
    </div>
  )
}
export default ToursCategory
