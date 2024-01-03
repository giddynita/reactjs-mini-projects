import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const Questions = ({ id, title, info, filterQuestions, unFilterQuestions }) => {
  const [answer, setAnswer] = useState(true)

  const showText = () => {
    setAnswer(!answer)
    filterQuestions(id)
  }
  const hideText = () => {
    setAnswer(!answer)
    unFilterQuestions()
  }
  return (
    <div className="question">
      {answer ? (
        <div className="header">
          <h5>{title}</h5>
          <button onClick={showText}>
            <FaPlus />
          </button>
        </div>
      ) : (
        <>
          <div className="header">
            <h5>{title}</h5>
            <button onClick={hideText}>
              <FaMinus className="icon" />
            </button>
          </div>
          <p>{info}</p>
        </>
      )}
    </div>
  )
}
export default Questions
