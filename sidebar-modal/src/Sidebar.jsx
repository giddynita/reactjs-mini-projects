import { FaBars, FaTimes } from 'react-icons/fa'
import { links, social } from './data.jsx'
import { useState } from 'react'

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header>
      <button
        type="button"
        className="header-menubar"
        onClick={() => {
          setToggleMenu(true)
        }}
      >
        <FaBars />
      </button>
      <div
        className={toggleMenu ? 'menubar-container' : 'menubar-container hide'}
      >
        <div className="menubar-header">
          <h3>
            De<span>Coda</span>
          </h3>
          <button
            className="times"
            onClick={() => {
              setToggleMenu(false)
            }}
          >
            <FaTimes />
          </button>
        </div>
        <nav className="menubar-nav">
          <ul>
            {links.map((link) => {
              const { id, url, text, icon } = link
              return (
                <li key={id} className="sidebar-links">
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
          <ul className="social-icon">
            {social.map((icons) => {
              const { id, url, icon } = icons
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Sidebar
