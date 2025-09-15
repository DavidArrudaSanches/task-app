import { useEffect, useState } from 'react'
import Header from './components/Header'
import Clock from './components/Clock'
import TaskInput from './components/TaskInput'
// import TaskItem from './components/TaskItem'
// import TaskList from './components/TaskList'
import styles from './App.module.css'
import TaskList from './components/TaskList'

export default function App() {
  
  const [tasks, setTasks] = useState(() =>{
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) :[]
  })

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(),
      text: task, completed:false}])
  }

  const editTask = (id,newText) =>{
    setTasks(
      tasks.map((tasks)=>
        task.id === id ? { ...task,text:newText }: task
      )
    )
  }

  const toggleTask=(id)=> {
    setTasks(
      tasks.map((tasks)=> task.id === id ? {...tasks,completed: !tasks.completed} : task)
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !==id))
  }
  
  const restoreTask = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task,completed:false} : false
      )
    )
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  return (
    <div className={styles.container}>
      <Header />
      <Clock />
      <TaskInput addTask={addTask} />
      
      <div className={styles.listContainer}>

      </div>
    </div>
  )
}

