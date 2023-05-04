const Reset = (props) => {
  return (
    <button
      onClick={() => {
        props.setCounter(0);
      }}
    >
      RESET
    </button>
  );
};
export default Reset;
