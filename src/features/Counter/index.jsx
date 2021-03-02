import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./couterSlice";

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counters);

  function handleClickIncrement() {
    const incre = increment();
    dispatch(incre);
  }

  const handleClickDecrement = () => {
    const decre = decrement();
    dispatch(decre);
  };
  return (
    <div>
      <p>counter: {count}</p>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </div>
  );
}

export default CounterFeature;
