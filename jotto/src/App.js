import './App.css';
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import {useEffect} from "react";
import {getSecretWord} from "./actions";

function App() {

  useEffect(() => {
      getSecretWord();
  }, []);

    return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={false}/>
      <Input success={false} secretWord={"party"}/>
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
