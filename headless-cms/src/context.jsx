import { createContext, useState } from 'react'
export const GlobalContext = createContext()

const Context = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  const [pageId, setPageId] = useState(null)

  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }

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
