import { questions } from './data'
import Questions from './Questions'
import { useState } from 'react'

const App = () => {
  const [question, setQuestion] = useState(questions)

  const filterQuestions = (tag) => {
    const singleQuestion = question.filter((single) => single.id === tag)
    setQuestion(singleQuestion)
  }
  const unFilterQuestions = () => {
    setQuestion(questions)
  }
  return (
    <main>
      <section className="question-section">
        <h2 className="question-section_title">
          Frequently Asked Questions (FAQs)
        </h2>
        {question.map((question) => {
          return (
            <Questions
              key={question.id}
              {...question}
              filterQuestions={filterQuestions}
              unFilterQuestions={unFilterQuestions}
            />
          )
        })}
      </section>
    </main>
  )
}
export default App
