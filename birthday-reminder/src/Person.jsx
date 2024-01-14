const Person = ({ id, img, name, age }) => {
  return (
    <div key={id} className="person">
      <img src={img} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  )
}
export default Person
