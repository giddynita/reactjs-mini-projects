import Error from './Error'
import { useFetchProjects } from './fetchProjects'
import Heading from './Heading'
import Loading from './Loading'

const Projects = () => {
  const { projects, error, loading } = useFetchProjects()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <section className="project-section">
      <Heading heading={'projects'} />
      <div className="project-container">
        {projects.map((project) => {
          const { id, title, url, img } = project
          return (
            <figure className="project">
              <a href={url} key={id}>
                <img src={img} alt={title} />{' '}
              </a>
              <figcaption className="project-title">{title}</figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
