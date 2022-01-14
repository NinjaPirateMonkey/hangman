import styles from './Game.module.css'
import { Progress } from '..'


export default function Game() {

    return (
        <div className={ styles.container }>

            <div className={ styles.progress }>
                <Progress />
            </div>
            <div className={ styles.buttons }></div>
            <div className={ styles.stage }></div>
            <div className={ styles.stats }></div>
        </div>
    )
}