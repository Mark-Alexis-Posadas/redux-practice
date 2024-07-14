export default function TodoItem({ todo, idx, handleDelete, handleEdit }) {
  return (
    <li className="flex items-center justify-between p-2 border border-slate-200 rounded my-2">
      {todo.text}

      <div className="flex items-center gap-3">
        <button
          className="text-blue-500"
          onClick={() => handleEdit(idx, todo.text)}
        >
          Edit
        </button>
        <button onClick={() => handleDelete(idx)} className="text-red-500">
          Delete
        </button>
      </div>
    </li>
  );
}
