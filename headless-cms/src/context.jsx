import { createContext, useState } from 'react'
export const GlobalContext = createContext()
import sublinks from './data'

const Context = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  const [pageId, setPageId] = useState(null)

  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }
  /* const getSubmenu = (id) => {
    const filter = sublinks.filter((sublink) => sublink.pageId === id)
    setSubmenu(filter)
  }
  const showSubmenu = () => {
    setActive(true)
  } */
  /* const hideShowSubmenu = () => {
    setActive(false)
  } */
  return (
    <GlobalContext.Provider
      value={{
        sidebar,
        openSidebar,
        closeSidebar,
        pageId,
        setPageId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default Context
