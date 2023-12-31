import { useContext } from 'react'
import { GlobalContext } from './context'
const Dropmenu = () => {
  const { submenu, active } = useContext(GlobalContext)
  const { page, links } = submenu[0]
  return (
    <section
      className={
        active ? 'show-dropmenu-section dropmenu-section' : 'dropmenu-section'
      }
    >
      <h5>{page}</h5>
      <ul className="dropmenu-link-container">
        {links.map((link) => {
          const { id, label, icon, url } = link
          return (
            <li key={id} className="dropmenu-link">
              {icon}
              <a href={url}>{label}</a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default Dropmenu
