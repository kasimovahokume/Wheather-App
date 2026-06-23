import styles from "./Input.module.css"
import type { InputProps } from "./Input.types"

 export const Input = ({icon, ...props}: InputProps) => {
    return (
        <div className={styles.wrapper}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <input className={styles.input} {...props}/>
        </div>
    )
 }