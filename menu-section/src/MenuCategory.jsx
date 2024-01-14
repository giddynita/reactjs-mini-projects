import SingleMenu from './SingleMenu'
import { menu } from './data'
import { useCallback, useState } from 'react'
import FilterButtons from './FilterButtons'

const MenuCategory = () => {
  const [foodMenu, setFoodMenu] = useState(menu)
  const filterFoodMenu = useCallback((tag) => {
    const newMenu = menu.filter((foodMenu) => foodMenu.category === tag)
    setFoodMenu(newMenu)
  })
  const allMenu = () => {
    setFoodMenu(menu)
  }
  return (
    <div className="menu-category">
      <FilterButtons
        filterFoodMenu={filterFoodMenu}
        menu={menu}
        allMenu={allMenu}
      />
      <div className="menu-items">
        {foodMenu.map((singleMenu) => {
          return <SingleMenu key={singleMenu.id} {...singleMenu} />
        })}
      </div>
    </div>
  )
}
export default MenuCategory
