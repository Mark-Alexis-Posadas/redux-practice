import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">{count}</h1>

      <div className="flex items-center gap-3 mt-5">
        <button
          className="text-white p-2 rounded bg-blue-500"
          onClick={handleIncrement}
        >
          increment
        </button>
        <button
          className="text-white p-2 rounded bg-red-500"
          onClick={handleDecrement}
        >
          decrement
        </button>
        <button
          className="text-white p-2 rounded bg-gray-500"
          onClick={handleReset}
        >
          reset
        </button>
      </div>
    </div>
  );
}
