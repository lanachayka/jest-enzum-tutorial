import axios from "axios";

export const getSecretWord = () => {
    return axios.get('http://localhost:3030')
        .then(response => response.data)
};

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
}

export function correctGuess() {
    return { type: actionTypes.CORRECT_GUESS};
}