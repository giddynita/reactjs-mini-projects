import SingleItem from './SingleItem'
import { useFetchTasks } from './reactQueryCustomHooks'
const Items = () => {
  const { data, isLoading, isError } = useFetchTasks()
  if (isLoading) {
    return <p style={{ marginTop: '2rem' }}>Loading...</p>
  }
  if (isError) {
    return <p style={{ marginTop: '2rem' }}>Cannot fetch data</p>
  }
  return (
    <div className="items">
      {data.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}

export default Items
