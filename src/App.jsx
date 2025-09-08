import { useEffect, useState } from 'react'
import Header from './components/Header'
import Clock from './components/Clock'
import TaskInput from './components/TaskInput'
// import TaskItem from './components/TaskItem'
// import TaskList from './components/TaskList'
import styles from './App.module.css'

export default function App() {
  
  const [tasks, setTasks] = useState(() =>{
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) :[]
  })

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(),
      text: task, completed:false}])
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  return (
    <div className={styles.container}>
      <Header />
      <Clock />
      <TaskInput addTask={addTask} />
    </div>
  )
}

