import { useSelector } from 'react-redux/es/hooks/useSelector'
import ListItem from './ListItem/ListItem'
import { useEffect, useState } from 'react'

import './TasksList.scss'

const TasksList = () => {
  const tasks = useSelector((state) => state.toDos)
  const [filteredTasks, setFilteredTasks] = useState([])
  const [currentFilter, setCurrentFilter] = useState('all')

  const allDoneToDos = tasks.filter((task) => task.isDone === true)
  const allNotDoneToDos = tasks.filter((task) => task.isDone === false)

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
      <div className="counter">
        <div className="counterConteiner">
          <div className="counter_item_text">Uncomplete</div>
          <div className="counter_item_value">{allNotDoneToDos.length}</div>
        </div>
        <div className="counterConteiner">
          <div className="counter_item_text">Complete</div>
          <div className="counter_item_value">{allDoneToDos.length}</div>
        </div>
      </div>
      <div className="filterContainer">
        <button
          className={currentFilter === 'all' ? 'activeBtn' : undefined}
          onClick={handleAllTasks}
        >
          All
        </button>
        <button
          className={currentFilter === 'uncompleted' ? 'activeBtn' : undefined}
          onClick={handleUncomplitedTask}
        >
          Uncomplete
        </button>
        <button
          className={currentFilter === 'completed' ? 'activeBtn' : undefined}
          onClick={handleComplitedTask}
        >
          Complete
        </button>
      </div>
      <div className='tasksBlock'>
        {filteredTasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          filteredTasks.map((task) => {
            return <ListItem task={task} key={task.id} />
          })
        )}
      </div>
    </>
  )
}

export default TasksList
