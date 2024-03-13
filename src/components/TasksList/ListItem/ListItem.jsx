import { useDispatch } from 'react-redux'
import { toggleIsDone } from '../../../redux/todos/actionCreators'
import check_box_outline from '../../../styles/icons/check_box_outline.svg'
import check_box from '../../../styles/icons/check_box.svg'

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
            <img className="checkIcon" src={check_box} alt="check" />
          ) : (
            <img className="checkIcon" src={check_box_outline} alt="check" />
          )}
        </div>
        <div className={task.isDone ? 'todo completedToDo' : 'todo'}>
          {task.toDo}
        </div>
      </div>
    </div>
  )
}

export default ListItem
