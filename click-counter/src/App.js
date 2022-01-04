import './App.css';
import {useState} from "react";

function App() {
   const [count, setCount] = useState(0);
   const [error, setError] = useState('');
   const decrement = () => {
    if(count === 0) {
        setError('Counter can not go bellow zero');
    } else {
        setCount(count - 1);
    }
  }
  const increment = () => {
       setCount(count + 1);
       setError('');
  }
  return (
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">
            The counter is currently&nbsp;
            <span data-test="count">{count}</span>
        </h1>
        <button
            data-test="increment-button"
            onClick={increment}>
            Increment counter
        </button>
        <button
            data-test="decrement-button"
            onClick={decrement}>
            Decrement counter
        </button>
          <h1 data-test="error-message">{error.length > 0 && error}</h1>
      </div>
  );
}

export default App;
