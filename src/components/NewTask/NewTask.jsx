import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addToDo } from '../../redux/todos/actionCreators'

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
  }

  return (
    <>
      <label>
        Add task:
        <input type="text" value={toDo} name="addTask" onChange={handleInput} />
      </label>
      <br />
      <button onClick={handleAddTask} disabled={!checkToDoLength}>
        Add
      </button>
    </>
  )
}

export default NewTask
