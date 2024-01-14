import { FaAngleDoubleRight } from 'react-icons/fa'
import { nanoid } from 'nanoid'

const JobType = ({ newData }) => {
  const { title, company, dates, duties } = newData
  return (
    <div className="job-type-tab">
      <h3 className="job-type-tab_title">{title}</h3>
      <p className="job-type-tab_company">{company} </p>
      <p className="job-type-tab_date">{dates} </p>
      {duties.map((duties, index) => {
        const id = nanoid()
        return (
          <div className="job-info" key={id}>
            <FaAngleDoubleRight className="bulletin" />
            <p className="duties">{duties} </p>
          </div>
        )
      })}
    </div>
  )
}
export default JobType
