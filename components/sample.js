import styles from "./sample.module.css"

export default function Sample({children}) {
  return (
    <>
    <div className={styles.container}>
      </div>
        <div className={styles.transaction}>
          
{children}
        </div>
    </>
  )
}