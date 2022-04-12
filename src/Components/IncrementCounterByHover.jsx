import React from "react";
import Counter from "./HOC";

const IncrementCounterByHover = (props) => {
  const { count, handleIncrement, name } = props;

  return (
    <>
      <div>{count}</div>
      <button onMouseOver={handleIncrement}>{name}</button>
    </>
  );
};

export default Counter(IncrementCounterByHover, 3);
