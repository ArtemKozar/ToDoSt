import { useSelector } from 'react-redux/es/hooks/useSelector'
import ListItem from './ListItem/ListItem'
import { useEffect, useState } from 'react'

const TasksList = () => {
  const tasks = useSelector((state) => state.toDos)
  const [filteredTasks, setFilteredTasks] = useState([])
  const [currentFilter, setCurrentFilter] = useState('all')

  const allDoneToDos = tasks.filter((task) => task.isDone === true)
  const allNotDoneToDos = tasks.filter((task) => task.isDone === false)
  console.log(filteredTasks)

  const handleUncomplitedTask = () => {
    setFilteredTasks(allNotDoneToDos)
    setCurrentFilter('uncompleted')
  }

  const handleComplitedTask = () => {
    setFilteredTasks(allDoneToDos)
    setCurrentFilter('completed')
  }

  const handleAllTasks = () => {
    setFilteredTasks(tasks)
    setCurrentFilter('all')
  }

  useEffect(() => {
    if (currentFilter === 'all') {
      setFilteredTasks(tasks)
    } else if (currentFilter === 'uncompleted') {
      setFilteredTasks(allNotDoneToDos)
    } else if (currentFilter === 'completed') {
      setFilteredTasks(allDoneToDos)
    }
  }, [tasks, currentFilter])

  return (
    <>
      <h2>Tasks list</h2>
      <span>Uncomplete - {allNotDoneToDos.length} </span>
      <span>Complete - {allDoneToDos.length} </span>
      <br />
      <button onClick={handleAllTasks}>All</button>
      <button onClick={handleUncomplitedTask}>Uncomplete</button>
      <button onClick={handleComplitedTask}>Complete</button>
      {filteredTasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        filteredTasks.map((task) => {
          return <ListItem task={task} key={task.id} />
        })
      )}
    </>
  )
}

export default TasksList
