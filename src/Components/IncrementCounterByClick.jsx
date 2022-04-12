import React from "react";
import Counter from "./HOC";

const IncrementCounterByClick = (props) => {
  const { count, handleIncrement, name } = props;

  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncrement}>{name}</button>
    </>
  );
};

export default Counter(IncrementCounterByClick, 1);
