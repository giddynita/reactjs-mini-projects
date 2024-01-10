import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { useContext } from 'react'
import { GlobalContext } from './context'

const NavBar = () => {
  const { openSidebar, setPageId } = useContext(GlobalContext)
  const hideSubmenu = (e) => {
    if (!e.target.classList.contains('sublinks')) {
      setPageId(null)
    }
  }
  return (
    <nav className="navbar" onMouseOver={hideSubmenu}>
      <h3 className="logo">gidi</h3>
      <button className="menu-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <div className="nav-links">
        {sublinks.map((sublink) => {
          const { pageId, page } = sublink
          return (
            <button
              key={pageId}
              className="sublinks"
              onMouseOver={() => {
                setPageId(pageId)
              }}
            >
              {page}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
export default NavBar
