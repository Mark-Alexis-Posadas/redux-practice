import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import {
  handleChange,
  openModal,
  closeModal,
  handleSubmitUser,
} from "../../features/user-management/userManagementSlice";

export default function UserManagement() {
  const dispatch = useDispatch();

  const {
    name,
    email,
    role,
    phoneNumber,
    address,
    isToggleModal,
    submittedUser,
  } = useSelector((state) => state.userManagement);

  const handleInputChange = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(closeModal());
    dispatch(handleSubmitUser({ name, email, role, phoneNumber, address }));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">User Management</h1>
        <button
          className="border border-slate-300 text-gray-400 p-2 rounded"
          onClick={() => dispatch(openModal())}
        >
          Add user
        </button>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
            <th scope="col" class="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          {submittedUser.map((item, index) => (
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              key={index}
            >
              <td class="px-6 py-4">{item.name}</td>
              <td class="px-6 py-4">{item.email}</td>
              <td class="px-6 py-4">{item.role}</td>
              <td class="px-6 py-4">{item.phoneNumber}</td>
              <td class="px-6 py-4">{item.address}</td>
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
        />
      )}
    </div>
  );
}
