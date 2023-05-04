const Increment = (props) => {
  return (
    <button
      className="increment"
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      <span>+</span>
    </button>
  );
};

export default Increment;
