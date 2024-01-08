import { GlobalContext } from './context'
import { useContext } from 'react'
import sublinks from './data'
const HomeLarge = () => {
  const { getSubmenu, showSubmenu, setActive, active } =
    useContext(GlobalContext)
  return (
    <>
      <div className="body-lg">
        <div className="large-container">
          <nav className="large-container-navbar">
            <h3 className="navbar_logo">gidi</h3>
            <ul className="pages">
              {sublinks.map((sublink) => {
                const { pageId, page } = sublink
                return (
                  <li
                    key={pageId}
                    className="single-page"
                    onMouseOver={() => {
                      getSubmenu(pageId)
                      showSubmenu()
                    }}
                    onMouseLeave={() => {
                      setActive(!active)
                    }}
                  >
                    {page}
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="clip"></div>
          <section className="content-container">
            <h2>manage any content anywhere</h2>
            <p>
              Strapi is the leading open source headless CMS. It's 100%
              JavaScript and fully customizable.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
export default HomeLarge
