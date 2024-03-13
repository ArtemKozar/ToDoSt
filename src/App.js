import { useState } from 'react'
import './App.scss'
import NewTask from './components/NewTask/NewTask'
import TasksList from './components/TasksList/TasksList'

function App() {
  return (
    <div className="App">
      <div className="container">
        <NewTask />
        <TasksList />
      </div>
    </div>
  )
}

export default App
