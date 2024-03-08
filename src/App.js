import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask/NewTask'
import TasksList from './components/TasksList/TasksList'

function App() {
  const [allTasks, setAllTasks] = useState([])
  console.log(allTasks)

  return (
    <div className="App">
      <NewTask setAllTasks={setAllTasks} />
      <br />
      <TasksList allTasks={allTasks} />
    </div>
  )
}

export default App
