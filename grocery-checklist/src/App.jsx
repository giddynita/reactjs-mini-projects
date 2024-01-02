import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'

import GroceryForm from './GroceryForm'
import GroceryList from './GroceryList'
import { nanoid } from 'nanoid'

const defaultList = JSON.parse(localStorage.getItem('list')) || []
const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const GroceryBud = () => {
  const [groceryList, setGroceryList] = useState(defaultList)

  const success = (result) => {
    toast.success(result, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }
  const addItem = (item) => {
    const newItem = {
      name: item,
      checked: false,
      id: nanoid(),
    }
    const newList = [...groceryList, newItem]
    if (item) {
      setGroceryList(newList)
      success('Grocery List Updated')
    } else {
      success('No Item Added')
    }
    setLocalStorage(newList)
  }
  const handleDelete = (tag) => {
    const newList = groceryList.filter((item) => item.id !== tag)
    setGroceryList(newList)
    success('Item Removed')
    setLocalStorage(removeItem)
  }
  const editItem = (tag) => {
    const editItem = groceryList.map((item) => {
      if (item.id === tag) {
        const editedList = { ...item, checked: !item.checked }
        return editedList
      }
      return item
    })
    setGroceryList(editItem)
    setLocalStorage(editItem)
  }
  return (
    <main>
      <div className="grocery">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h2 className="grocery-title">grocery list</h2>
        <GroceryForm addItem={addItem} success={success} />
        <GroceryList
          groceryList={groceryList}
          handleDelete={handleDelete}
          editItem={editItem}
        />
      </div>
    </main>
  )
}
export default GroceryBud
