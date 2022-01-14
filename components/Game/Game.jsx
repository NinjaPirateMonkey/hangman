import styles from './Game.module.css'
export default function Game() {

    return (
        <div className={ styles.container }>

            <div className={ styles.progress }></div>
            <div className={ styles.buttons }></div>
            <div className={ styles.stage }></div>
            <div className={ styles.stats }></div>
        </div>
    )
}