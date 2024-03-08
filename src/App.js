import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask/NewTask'
import TasksList from './components/TasksList/TasksList'

function App() {


  return (
    <div className="App">
      <NewTask />
      <br />
      <TasksList />
    </div>
  )
}

export default App
