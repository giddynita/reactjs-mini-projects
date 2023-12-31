import HomeLarge from './HomeLarge'
import HomeSmall from './HomeSmall'
import Submenus from './context'
import Dropmenu from './Dropmenu'

const Submenu = () => {
  return (
    <Submenus>
      <HomeSmall />
      <HomeLarge />
      <Dropmenu />
    </Submenus>
  )
}
export default Submenu
