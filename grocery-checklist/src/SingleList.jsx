import { useState } from 'react'

const SingleList = ({ item, handleDelete, editItem }) => {
  const { name, id } = item
  return (
    <div className="grocery-list">
      <div>
        <input
          type="checkbox"
          name="checkItem"
          id="checkItem"
          checked={item.checked}
          onChange={() => {
            editItem(id)
          }}
        />
        <p
          style={{
            textTransform: 'capitalize',
            textDecoration: item.checked && 'line-through',
          }}
        >
          {name}
        </p>
      </div>
      <button
        type="button"
        className="delete-item"
        onClick={() => {
          handleDelete(id)
        }}
      >
        delete
      </button>
    </div>
  )
}
export default SingleList
