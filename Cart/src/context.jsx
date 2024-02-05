import { createContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  LOADING,
  REMOVE,
  DISPLAY_ITEMS,
} from './action'
import cartItems from './data'
import { getTotals } from './utils'
const url = 'https://www.course-api.com/react-useReducer-cart-project'

export const AppContext = createContext()

const initialState = {
  loading: false,
  cart: new Map(),
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { totalAmount, cartTotal } = getTotals(state.cart)

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }
  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } })
  }
  const increaseItem = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
  }
  const decreaseItem = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
  }

  const fetchData = async () => {
    dispatch({ type: LOADING })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
