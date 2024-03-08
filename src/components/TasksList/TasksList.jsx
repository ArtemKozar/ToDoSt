import { useSelector } from 'react-redux/es/hooks/useSelector'
import ListItem from './ListItem/ListItem'
const TasksList = () => {
  const tasks = useSelector((state) => state.toDos)
  return (
    <>
      <h2>Tasks list</h2>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        tasks.map((task) => {
          return <ListItem task={task} key={task.id} />
        })
      )}
    </>
  )
}

export default TasksList
