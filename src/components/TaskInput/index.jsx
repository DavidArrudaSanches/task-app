import { useState } from "react";
import styles from "./TaskInput.module.css"

function TaskInput({addTask}){
    const [value, setValue] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value.trim()) return
        addTask(value)
        setValue("")
    }
    return (
        <form className="{style.form}" onSubmit={handleSubmit}>
            <input type="text" 
            value={value} 
            onChange={(e) => 
            setValue(e.target.value)} 
            placeholder="Digite sua Tarefa" 
            className={styles.input}/>

            <button type="submit" className={styles.button}>
                Adicionar
            </button>

        </form>
    )

}

export default TaskInput