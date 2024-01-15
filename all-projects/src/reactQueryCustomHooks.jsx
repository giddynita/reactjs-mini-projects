import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from './context'

export const useFetchImages = () => {
  const { isImageSearch } = useContext(AppContext)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', isImageSearch],
    queryFn: async () => {
      const result = await axios.get(
        `http://api.unsplash.com/search/photos/?client_id=${
          import.meta.env.VITE_API_KEY
        }&query=${isImageSearch}`
      )
      const imgUrl = result.data.results
      return imgUrl
    },
  })

  return { data, isLoading, isError }
}
