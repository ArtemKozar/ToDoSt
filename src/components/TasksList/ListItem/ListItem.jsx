import { useDispatch } from 'react-redux'
import { toggleIsDone } from '../../../redux/todos/actionCreators'

const ListItem = ({ task }) => {
  const dispatch = useDispatch()
  const handleToggleIsDone = (ToDoId) => {
    dispatch(toggleIsDone(ToDoId))
  }

  return (
    <>
      <div onClick={() => handleToggleIsDone(task.id)}>
        {task.toDo}
        <span>{!task.isDone ? ' + ' : ' - '}</span>
      </div>
    </>
  )
}

export default ListItem
