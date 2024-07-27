export default function Modal() {
  return (
    <div className="fixed flex items-center justify-center bg-[rgba(0,0,0,0.4)] w-full h-full left-0 top-0">
      <form className="bg-white p-3 rounded shadow-md w-[1100px]">
        <h1 className="text-2xl font-bold mb-5">Add user</h1>
        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Name</label>
          <input
            type="text"
            className="p-2 rounded text-gray-400 bg-slate-100"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Email</label>
          <input
            type="text"
            className="p-2 rounded text-gray-400 bg-slate-100"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Role</label>
          <select className="p-2 rounded text-gray-400 bg-slate-100">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Phone Number</label>
          <input
            type="text"
            className="p-2 rounded text-gray-400 bg-slate-100"
            placeholder="090...."
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Address</label>
          <input
            type="text"
            className="p-2 rounded text-gray-400 bg-slate-100"
            placeholder="98,Makati City"
          />
        </div>
        <button className="text-white p-2 rounded bg-blue-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
