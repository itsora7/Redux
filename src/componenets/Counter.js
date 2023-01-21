import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [incAmount, setIncAmount] = useState(0);
  const addValue = Number(incAmount) || 0;

  const resetAll = () => {
    setIncAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div className="btn1">
        <button className="inc" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="dec" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <input type="number" onChange={(e) => setIncAmount(e.target.value)} />
      <div className="btn2">
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add amount
        </button>
        <button onClick={() => resetAll()}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
