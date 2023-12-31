import { createContext, useState } from 'react'
export const GlobalContext = createContext()
import sublinks from './data'

const Submenus = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  const [submenu, setSubmenu] = useState(sublinks)
  const [active, setActive] = useState(false)

  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }
  const getSubmenu = (id) => {
    const filter = sublinks.filter((sublink) => sublink.pageId === id)
    setSubmenu(filter)
  }
  const showSubmenu = () => {
    setActive(true)
  }
  const hideShowSubmenu = () => {
    setActive(false)
  }
  return (
    <GlobalContext.Provider
      value={{
        sidebar,
        openSidebar,
        closeSidebar,
        submenu,
        getSubmenu,
        active,
        showSubmenu,
        hideShowSubmenu,
        setActive,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default Submenus
