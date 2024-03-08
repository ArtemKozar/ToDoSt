import { PropTypes } from 'prop-types'
import ListItem from './ListItem/ListItem'
const TasksList = ({ allTasks }) => {
  console.log(allTasks)
  return (
    <>
      <div>Tasks list</div>
      {allTasks?.map((task) => {
        return <ListItem task={task}/>
      })}
    </>
  )
}

TasksList.propTypes = {
  allTasks: PropTypes.array.isRequired,
}

export default TasksList
