import Person from './Person'

const List = ({ list }) => {
  return (
    <ul>
      <li>
        {list.map((person) => {
          return <Person {...person} key={person.id} />
        })}
      </li>
    </ul>
  )
}
export default List
