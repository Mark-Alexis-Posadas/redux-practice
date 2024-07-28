import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({
  dispatch,
  closeModal,
  name,
  email,
  role,
  phoneNumber,
  address,
  handleInputChange,
  handleSubmit,
  isEditing,
}) {
  return (
    <div className="fixed flex items-center justify-center bg-[rgba(0,0,0,0.4)] w-full h-full left-0 top-0">
      <form
        className="bg-white p-3 rounded shadow-md w-[1100px]"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-bold">
            {isEditing ? "Edit User" : "Add User"}
          </h1>
          <button
            className="border border-slate-400 rounded-full p-2 w-10 h-10 text-xl flex items-center justify-center"
            onClick={() => dispatch(closeModal())}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Name</label>
          <input
            onChange={handleInputChange}
            name="name"
            value={name}
            type="text"
            className="p-2 rounded text-gray-400 bg-slate-100"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Email</label>
          <input
            onChange={handleInputChange}
            name="email"
            value={email}
            type="email"
            className="p-2 rounded text-gray-400 bg-slate-100"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Role</label>
          <select
            onChange={handleInputChange}
            name="role"
            value={role}
            className="p-2 rounded text-gray-400 bg-slate-100"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Phone Number</label>
          <input
            onChange={handleInputChange}
            name="phoneNumber"
            value={phoneNumber}
            type="text"
            className="p-2 rounded text-gray-400 bg-slate-100"
            placeholder="090...."
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm text-gray-400 block">Address</label>
          <input
            onChange={handleInputChange}
            name="address"
            value={address}
            type="text"
            className="p-2 rounded text-gray-400 bg-slate-100"
            placeholder="98,Makati City"
          />
        </div>
        <button
          type="submit"
          className="text-white p-2 rounded bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
