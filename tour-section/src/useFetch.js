import { useState, useEffect } from 'react'

const useFetch = (data) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [tours, setTours] = useState({})
  const fetchData = async () => {
    try {
      const response = await fetch(data)
      const user = await response.json()
      setTours(user)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return { isLoading, isError, tours, setTours, fetchData }
}

export default useFetch
