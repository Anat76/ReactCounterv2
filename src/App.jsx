import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";

const App = () => {
  const [counter, setCounter] = useState([0]);

  const AddCounter = () => {
    const newCounter = [...counter];
    newCounter.push(0);
    setCounter(newCounter);
    console.log(newCounter);
  };
  const incrementCounter = (index) => {
    const incrementCounter = [...counter];
    incrementCounter[index] = incrementCounter[index] + 1;
    setCounter(incrementCounter);
  };

  const decrementCounter = (index) => {
    const decrementCounter = [...counter];
    decrementCounter[index] = decrementCounter[index] - 1;
    setCounter(decrementCounter);
  };

  const resetCounter = (index) => {
    const resetCounter = [...counter];
    resetCounter[index] = 0;
    setCounter(resetCounter);
  };
  return (
    <section>
      <header>
        <h1>React Counter V2</h1>
      </header>
      <main>
        <div className="button-action">
          {counter.length < 3 && (
            <button
              onClick={() => {
                AddCounter();
              }}
            >
              Add Counter
            </button>
          )}
          {counter.map((counters, index) => {
            return (
              <Counter
                key={index}
                counters={counters}
                index={index}
                incrementCounter={incrementCounter}
                decrementCounter={decrementCounter}
                resetCounter={resetCounter}
              />
            );
          })}
        </div>
      </main>
      <footer>
        <p>Made with React at Le Reacteur by Anat</p>
      </footer>
    </section>
  );
};

export default App;
