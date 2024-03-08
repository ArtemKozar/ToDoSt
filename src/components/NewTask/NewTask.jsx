import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addToDo } from '../../redux/todos/actionCreators'

const NewTask = () => {
  const [toDo, setToDo] = useState('')
  const dispatch = useDispatch()

  const handleInput = (event) => {
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
      <button onClick={handleAddTask}>Add</button>
    </>
  )
}

export default NewTask
