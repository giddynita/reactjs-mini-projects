import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { AppContext } from './context'
import { useContext } from 'react'

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseItem, decreaseItem } = useContext(AppContext)
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increaseItem(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        <span className="amount">{amount}</span>
        <button className="amount-btn" onClick={() => decreaseItem(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  )
}

export default CartItem
