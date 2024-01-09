import { GlobalContext } from './context'
import { useContext } from 'react'
import Sidebar from './Sidebar'

const Hero = () => {
  const { sidebar } = useContext(GlobalContext)
  return (
    <div className="hero">
      <div className="clip"></div>
      <section className="content-container">
        <h2>manage any content anywhere</h2>
        <p>
          Gidi is the leading open source headless CMS. It's 100% JavaScript and
          fully customizable.
        </p>
      </section>
    </div>
  )
}
export default Hero
