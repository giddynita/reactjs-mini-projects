import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { useContext } from 'react'
import { GlobalContext } from './context'

const NavBar = () => {
  const { openSidebar } = useContext(GlobalContext)
  return (
    <nav className="navbar">
      <h3 className="logo">gidi</h3>
      <button className="menu-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <div className="nav-links">
        {sublinks.map((sublink) => {
          const { pageId, page } = sublink
          return (
            <button key={pageId} className="sublinks">
              {page}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
export default NavBar
