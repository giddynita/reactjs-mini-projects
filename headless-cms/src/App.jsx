import Context from './context'
import NavBar from './NavBar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

const App = () => {
  return (
    <Context>
      <NavBar />
      <Hero />
      <Sidebar />
      <Submenu />
    </Context>
  )
}
export default App
