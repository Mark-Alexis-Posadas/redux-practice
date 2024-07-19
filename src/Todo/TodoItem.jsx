export default function TodoItem({
  todo,
  index,
  handleEditTodo,
  handleDeleteTodo,
}) {
  return (
    <li className="flex items-center justify-between p-2 border border-slate-200 rounded my-2">
      {todo}

      <div className="flex items-center gap-3">
        <button
          className="text-blue-500"
          onClick={() => handleEditTodo(index, todo)}
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteTodo(index)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
