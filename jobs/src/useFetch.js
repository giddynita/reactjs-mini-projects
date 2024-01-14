import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState({})
  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const user = await response.json()
      setData(user)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return { isLoading, isError, data }
}

export default useFetch
