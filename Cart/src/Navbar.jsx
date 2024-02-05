import { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { AppContext } from './context'
const Navbar = () => {
  const { cartTotal } = useContext(AppContext)
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{cartTotal}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
