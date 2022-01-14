
const initialState = {
    wins: 0,
    losses: 0,
    gamesPlayed: 0,
    buttonLetters: _buttonLetters()
}


function _buttonLetters() {
    const ALPHA = 'abcdefghijklmnopqrstuvwxyz'
    return ALHPA
        .split('')
        .map( letter => ({ value: letter, show: true }))
}

function _initialState() {
    return { ...initialState }
}

export {
    _initialState
}