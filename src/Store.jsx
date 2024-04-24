import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./cartCountSlice";

export default function Store() {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        increment by amount
      </button>
    </div>
  );
}
