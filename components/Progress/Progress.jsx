import styles from './Progress.module.css'


const fakeProps = {
    word: [
        { value: 't', guessed: false },
        { value: 'e', guessed: true },
        { value: 't', guessed: false },
        { value: 't', guessed: false },
    ]
}

export default function Progress( props ) {

    function renderWord( word ) {
        return word.map( (letter, i) => {
            const text = letter.guessed
                ? letter.value
                : ' _ '
            return <span key={i} className={styles.letter}>{ text }</span>
        })
    }
    
    return (
        <div className={styles.container}> 
            { renderWord( fakeProps.word )}
        </div>
    )
}