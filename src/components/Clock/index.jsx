import { use, useEffect, useState } from "react";
import styles from "./Clock.module.css"

function Clock(){
    const [horaAtual, setHoraAtual] = useState(new Date())

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHoraAtual(new Date())
        }, 1000);
        return() => clearInterval(intervalo)
    }), [];

    return(
        <div className={styles.relogioContainer}>
            <p className={styles.hora}>{horaAtual.toLocaleTimeString}</p>
            <p className={styles.data}>
                {horaAtual.toLocaleDateString("pt-BR", {
                    weekday:'long',
                    day:'numeric',
                    month:'long',
                    year:'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}
            </p>
        </div>
    )
}

export default Clock