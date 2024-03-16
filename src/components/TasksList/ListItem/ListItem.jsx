import { useDispatch } from 'react-redux'
import { toggleIsDone, deleteToDo } from '../../../redux/todos/actionCreators'
import check_box_outline from '../../../styles/icons/check_box_outline.svg'
import check_box from '../../../styles/icons/check_box.svg'
import delete_icon from '../../../styles/icons/delete.svg'

import './ListItem.scss'
import { useState } from 'react'

const ListItem = ({ task }) => {
  const dispatch = useDispatch()

  const [isHovered, setIsHovered] = useState(false)

  const handleToggleIsDone = (ToDoId) => {
    dispatch(toggleIsDone(ToDoId))
  }

  const handleDeleteTodo = (ToDoId) => {
    dispatch(deleteToDo(ToDoId))
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="toDoContainer">
      <div
        className="taskBlock"
        onClick={() => handleToggleIsDone(task.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
        <div className="deleteToDo" onClick={() => handleDeleteTodo(task.id)}>
          {isHovered && (
            <img className="checkIcon" src={delete_icon} alt="delete todo" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ListItem
