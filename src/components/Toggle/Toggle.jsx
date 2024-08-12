import { useDispatch, useSelector } from "react-redux";
import { setIsToggle } from "../../features/toggle/toggleSlice";
export default function Toggle() {
  const isToggle = useSelector((state) => state.toggle.isToggle);
  const dispatch = useDispatch();
  const handleIsToggleClick = () => {
    dispatch(setIsToggle());
  };
  return (
    <div className="flex items-center gap-4">
      <button onClick={handleIsToggleClick}>
        {isToggle ? "Light" : "Dark"}
      </button>
    </div>
  );
}
