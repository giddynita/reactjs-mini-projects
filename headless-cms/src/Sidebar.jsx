import { useContext } from 'react'
import sublinks from './data'
import { FaTimes } from 'react-icons/fa'
import { GlobalContext } from './context'

const Sidebar = () => {
  const { sidebar, closeSidebar } = useContext(GlobalContext)
  return (
    <aside className={sidebar ? 'sidebar' : 'sidebar close-sidebar'}>
      <button className="close-menu-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
      {sublinks.map((sublink) => {
        const { pageId, page, links } = sublink
        return (
          <div key={pageId}>
            <h5>{page}</h5>
            <div className="sidebar-content">
              {links.map((link) => {
                const { id, label, icon, url } = link
                return (
                  <ul key={id}>
                    <li className="sidebar-link">
                      {icon}
                      <a href={url}>{label}</a>
                    </li>
                  </ul>
                )
              })}
            </div>
          </div>
        )
      })}
    </aside>
  )
}
export default Sidebar
