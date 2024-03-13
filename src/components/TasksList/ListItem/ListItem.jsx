import { useDispatch } from 'react-redux'
import { toggleIsDone } from '../../../redux/todos/actionCreators'
import check_icon from '../../../styles/icons/check.svg'

import './ListItem.scss'

const ListItem = ({ task }) => {
  const dispatch = useDispatch()
  const handleToggleIsDone = (ToDoId) => {
    dispatch(toggleIsDone(ToDoId))
  }

  return (
    <div className="toDoContainer">
      <div className="taskBlock" onClick={() => handleToggleIsDone(task.id)}>
        <div className="toDoStatus">
          {task.isDone ? (
            <img className="checkIcon" src={check_icon} alt="check" />
          ) : undefined}
        </div>
        <div className={task.isDone ? 'todo completedToDo' : 'todo'}>
          {task.toDo}
        </div>
      </div>
    </div>
  )
}

export default ListItem
