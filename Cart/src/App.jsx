import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useContext } from 'react'
import { AppContext } from './context'

const App = () => {
  const { loading } = useContext(AppContext)

  if (loading) {
    return <div className="loading" style={{ marginTop: '6rem' }}></div>
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
