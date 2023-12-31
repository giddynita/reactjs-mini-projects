import { FaBars } from 'react-icons/fa'
import { GlobalContext } from './context'
import { useContext } from 'react'
import Sidebar from './Sidebar'

const HomeSmall = () => {
  const { sidebar, openSidebar } = useContext(GlobalContext)
  return (
    <>
      <div className={sidebar ? 'close-body' : 'body'}>
        <nav className="navbar">
          <h3 className="navbar_logo">gidi</h3>
          <button className="open-sidebar" onClick={openSidebar}>
            <FaBars />
          </button>
        </nav>
        <div className="clip"></div>
        <section className="content-container">
          <h2>manage any content anywhere</h2>
          <p>
            Gidi is the leading open source headless CMS. It's 100% JavaScript
            and fully customizable.
          </p>
        </section>
      </div>
      <Sidebar />
    </>
  )
}
export default HomeSmall
