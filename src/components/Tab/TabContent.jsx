export default function TabContent({ content, index, isActive }) {
  return (
    <div
      className={`${
        index === isActive ? "block" : "hidden"
      } my-3 bg-slate-200 p-2 rounded`}
    >
      {content}
    </div>
  );
}
