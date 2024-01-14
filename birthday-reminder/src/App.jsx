import { useState } from 'react'
import { people } from './data'
import List from './List'

const App = () => {
  const [birthdayList, setBirthdayList] = useState({
    people: people,
    button: false,
  })

  const clearAll = () => {
    setBirthdayList({
      people: [],
      button: true,
    })
  }
  const reset = () => {
    setBirthdayList({
      people: people,
      button: false,
    })
  }

  return (
    <main>
      <section className="container">
        <h3>{birthdayList.people.length} Birthdays Today</h3>
        <List list={birthdayList.people} />
        {birthdayList.button ? (
          <button type="button" className="btn btn-block" onClick={reset}>
            Reset
          </button>
        ) : (
          <button type="button" className="btn btn-block" onClick={clearAll}>
            Clear All
          </button>
        )}
      </section>
    </main>
  )
}
export default App
