import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addToDo } from '../../redux/todos/actionCreators'

import './NewTask.scss'

const NewTask = () => {
  const [toDo, setToDo] = useState('')
  const [checkToDoLength, setCheckToDoLength] = useState(false)
  const dispatch = useDispatch()

  const handleInput = (event) => {
    event.target.value.length >= 20 || event.target.value.length < 3
      ? setCheckToDoLength(false)
      : setCheckToDoLength(true)

    setToDo(event.target.value)
  }

  const handleAddTask = () => {
    const task = {
      toDo,
      isDone: false,
      id: uuidv4(),
    }
    dispatch(addToDo(task))
    setToDo('')
    setCheckToDoLength(false)
  }

  return (
    <>
      <h1 className="toDoName">
        TODO<span className='letter'>s</span>T
      </h1>
      <input
        type="text"
        placeholder="ToDo"
        value={toDo}
        onChange={handleInput}
      />

      <br />
      <button
        onClick={handleAddTask}
        disabled={!checkToDoLength}
        className="addButton"
      >
        ADD
      </button>
    </>
  )
}

export default NewTask
