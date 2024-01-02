import SingleList from './SingleList'

const GroceryList = ({ groceryList, handleDelete, editItem }) => {
  return (
    <>
      {groceryList.map((item) => {
        return (
          <SingleList
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            editItem={editItem}
          />
        )
      })}
    </>
  )
}
export default GroceryList
