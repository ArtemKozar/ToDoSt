import { useState } from 'react'
import PropTypes from 'prop-types'

const NewTask = ({ setAllTasks }) => {
  const [toDo, setToDo] = useState({ task: '', isDone: false })

  const handleInput = (event) => {
    setToDo({ ...toDo, task: event.target.value })
  }

  const handleAddTask = () => {
    setAllTasks((prevAllTasks) => [...prevAllTasks, toDo])
    setToDo({ ...toDo, task: '' })
  }

  return (
    <>
      <label>
        Add task:
        <input
          type="text"
          value={toDo.task}
          name="addTask"
          onChange={handleInput}
        />
      </label>
      <br />
      <button onClick={handleAddTask}>Add</button>
    </>
  )
}

NewTask.propTypes = {
  setAllTasks: PropTypes.func.isRequired,
}

export default NewTask
