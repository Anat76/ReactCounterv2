const Counter = ({
  index,
  counters,
  incrementCounter,
  decrementCounter,
  resetCounter,
}) => {
  return (
    <div className="counter">
      <button
        className="decrement"
        onClick={() => {
          decrementCounter(index);
        }}
      >
        -
      </button>
      <span>{counters}</span>
      <button
        className="increment"
        onClick={() => {
          incrementCounter(index);
        }}
      >
        +
      </button>
      <button
        className="button-action"
        onClick={() => {
          resetCounter(index);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
