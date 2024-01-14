const FilterButtons = ({ filterFoodMenu, menu, allMenu }) => {
  const categories = [...new Set(menu.map((foodMenu) => foodMenu.category))]
  const [first, second, third] = categories
  return (
    <div className="filter-btns">
      <button type="button" className="btn" onClick={allMenu}>
        all
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          filterFoodMenu(first)
        }}
      >
        breakfast
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          filterFoodMenu(second)
        }}
      >
        lunch
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          filterFoodMenu(third)
        }}
      >
        shakes
      </button>
    </div>
  )
}

export default FilterButtons
