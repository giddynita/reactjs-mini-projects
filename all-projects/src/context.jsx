import { createContext, useEffect, useState } from 'react'
export const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme') === 'false'

  return storedDarkMode || prefersDarkMode
}

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [isImageSearch, setIsImageSearch] = useState('office')
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, isImageSearch, setIsImageSearch }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider
