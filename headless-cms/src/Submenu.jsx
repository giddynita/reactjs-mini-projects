import { useContext, useRef } from 'react'
import { GlobalContext } from './context'
import sublinks from './data'
const Dropmenu = () => {
  const { pageId, setPageId } = useContext(GlobalContext)
  const pageOnHover = sublinks.find((sublinks) => sublinks.pageId === pageId)
  const submenuRef = useRef(null)
  const hideSUbmenu = (event) => {
    const submenu = submenuRef.current
    const { left, right, bottom } = submenu.getBoundingClientRect()
    const { clientX, clientY } = event
    if (clientX < left || clientX > right || clientY > bottom - 1) {
      setPageId(null)
    }
  }

  return (
    <section
      className={pageOnHover?.pageId ? 'show-submenu' : 'submenu'}
      ref={submenuRef}
      onMouseLeave={hideSUbmenu}
    >
      <h5>{pageOnHover?.page}</h5>
      <div
        className="submenu-content"
        style={{
          gridTemplateColumns:
            pageOnHover?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {pageOnHover?.links?.map((link) => {
          const { id, label, icon, url } = link
          return (
            <ul key={id}>
              <li className="submenu-link">
                {icon}
                <a href={url}>{label}</a>
              </li>
            </ul>
          )
        })}
      </div>
    </section>
  )
}
export default Dropmenu
