import useFetch from './useFetch'
import Loading from './Loading'
import Error from './Error'
import MenuBtn from './MenuBtn'
import JobType from './JobType'
import { useState } from 'react'

const url = 'https://course-api.com/react-tabs-project'

const JobTab = () => {
  const { isLoading, isError, data } = useFetch(url)
  const [currentTab, setCurrentTab] = useState(0)
  const newData = data[currentTab]

  const selectTab = (order) => {
    const selector = data.length - order
    setCurrentTab(selector)
  }
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <Error />
  }
  return (
    <main>
      <div className="job-tab">
        <MenuBtn data={data} selectTab={selectTab} />
        <JobType newData={newData} />
      </div>
    </main>
  )
}
export default JobTab
