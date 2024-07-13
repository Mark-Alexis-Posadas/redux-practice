export default function TodoModal() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] min-h-screen fixed w-full top-0 left-0 flex items-center justify-center">
      <form className="bg-white p-10 w-[600px] rounded">
        <h1 className="font-bold mb-2 text-xl">Update todo</h1>
        <input
          type="text"
          placeholder="edit todo"
          className="border border-slate-50 rounded p-2 bg-slate-200 w-full"
        />
        <div className="flex items-center gap-3 mt-5">
          <button className="text-white rounded p-2 bg-red-500">cancel</button>
          <button className="text-white rounded p-2 bg-blue-500">submit</button>
        </div>
      </form>
    </div>
  );
}
