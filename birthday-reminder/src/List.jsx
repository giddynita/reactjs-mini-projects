import Person from './Person'

const List = ({ list }) => {
  return (
    <ul>
      <li>
        {list.map((person) => {
          return <Person {...person} />
        })}
      </li>
    </ul>
  )
}
export default List
