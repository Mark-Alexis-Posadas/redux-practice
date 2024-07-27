import Modal from "./Modal";

export default function UserManagement() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>User Management</h1>
        <button className="border border-slate-300 text-gray-400 p-2 rounded">
          Add user
        </button>
      </div>

      <Modal />
    </div>
  );
}
