import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import {
  handleChange,
  openModal,
  closeModal,
  closeConfirmationModal,
  handleSubmitUser,
  toggleEdit,
  add,
  toggleDelete,
  handleDeleteYes,
} from "../../features/user-management/userManagementSlice";
import ConfirmationPopUp from "./ConfirmationPopUp";

export default function UserManagement() {
  const dispatch = useDispatch();

  const {
    name,
    email,
    role,
    phoneNumber,
    address,
    isToggleModal,
    isEditing,
    submittedUser,
    editIndex,
    isConfirmation,
  } = useSelector((state) => state.userManagement);

  const handleInputChange = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleAdd = () => {
    dispatch(openModal());
    dispatch(add());
  };

  const handleEdit = (index) => {
    dispatch(openModal());
    dispatch(toggleEdit(index));
  };

  const handleToggleDelete = (index) => {
    dispatch(toggleDelete(index));
  };

  const handleConfirmDelete = () => {
    dispatch(handleDeleteYes());
    console.log("pasok");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      role.trim() === "" ||
      phoneNumber.trim() === "" ||
      address.trim() === ""
    ) {
      alert("please filled out the fileds");
      return;
    }
    dispatch(closeModal());
    dispatch(handleSubmitUser({ name, email, role, phoneNumber, address }));
  };

  return (
    <div className="max-w-[1200px] m-auto font-raleway">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-2xl">User Management</h1>
        <button
          className="border bg-blue-600 text-white p-2 rounded"
          onClick={handleAdd}
        >
          Add User
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {submittedUser.map((item, index) => (
            <tr
              className={`${
                editIndex === index ? "border-2 border-green-600" : ""
              } odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}
              key={index}
            >
              <td className="px-6 py-4">{index}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.role}</td>
              <td className="px-6 py-4">{item.phoneNumber}</td>
              <td className="px-6 py-4">{item.address}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleToggleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isToggleModal && (
        <Modal
          dispatch={dispatch}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          name={name}
          email={email}
          role={role}
          phoneNumber={phoneNumber}
          address={address}
          isEditing={isEditing}
        />
      )}
      {isConfirmation.show && (
        <ConfirmationPopUp
          handleConfirmDelete={handleConfirmDelete}
          closeConfirmationModal={closeConfirmationModal}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
