import PropTypes from "prop-types";

GuessedWords.propTypes = {
   guessedWords: PropTypes.arrayOf(PropTypes.shape({
       guessedWord: PropTypes.string.isRequired,
       letterMatchCount: PropTypes.number.isRequired
   })).isRequired
};

export default function GuessedWords({ guessedWords }){
    let contents;
    if (guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">Try to guess the secret word</span>
        )
    }
    return (
        <div data-test="guessed-words-component">
            {contents}
        </div>
    )
}