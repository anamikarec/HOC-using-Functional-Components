import React, { useState } from "react";

const Counter = (WrappedComponent, entity) => {
  const Counter = (props) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + entity);
    };
    return (
      <WrappedComponent
        count={count}
        handleIncrement={handleIncrement}
        {...props}
      />
    );
  };
  return Counter;
};
export default Counter;
