import { useState } from 'react'

const GroceryForm = ({ addItem }) => {
  const [item, setItem] = useState('')
  const handleChange = (e) => {
    setItem(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
    setItem('')
  }
  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="grocery"
        value={item}
        className="grocery-input"
        onChange={handleChange}
      />
      <button type="submit" className="add-item">
        add item
      </button>
    </form>
  )
}
export default GroceryForm
