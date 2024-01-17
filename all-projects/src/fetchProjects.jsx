import { useEffect, useState } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: 'dc28dkbw08sq',
  environment: 'master',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [projects, setProjects] = useState([])

  const data = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      console.log(response)
      const project = response.items.map((item) => {
        const { image, title, url } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url

        return { id, title, url, img }
      })
      return setLoading(false), setProjects(project)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    data()
  }, [])

  return { loading, error, projects }
}
