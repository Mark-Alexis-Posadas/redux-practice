export default function TabItem({ item, index, isActive, handleSetActive }) {
  return (
    <li
      className={`${
        index === isActive ? "text-purple-400" : "text-gray-400"
      } cursor-pointer`}
      onClick={handleSetActive}
    >
      {item}
    </li>
  );
}
