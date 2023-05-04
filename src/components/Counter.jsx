const Counter = ({
  index,
  counters,
  incrementCounter,
  decrementCounter,
  resetCounter,
}) => {
  return (
    <>
      <button
        onClick={() => {
          decrementCounter(index);
        }}
      >
        -
      </button>
      <span>{counters}</span>
      <button
        onClick={() => {
          incrementCounter(index);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          resetCounter(index);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
