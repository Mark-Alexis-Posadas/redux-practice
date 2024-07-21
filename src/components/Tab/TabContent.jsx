export default function TabContent({ content, index, isActive }) {
  return (
    <div
      className={`${
        index === isActive ? "block" : "hidden"
      } my-3 bg-slate-200 dark:bg-black p-2 rounded`}
    >
      <h2 className="font-bold text-md text-[#999] dark:text-white">
        {content}
      </h2>
    </div>
  );
}
