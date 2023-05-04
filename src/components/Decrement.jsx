const Decrement = (props) => {
  return (
    <button
      className="decrement"
      onClick={() => {
        props.setCounter(props.counter - 1);
      }}
    >
      <span>-</span>
    </button>
  );
};

export default Decrement;
