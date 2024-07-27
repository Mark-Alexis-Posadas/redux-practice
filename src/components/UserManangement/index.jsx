import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import {
  handleChange,
  openModal,
  closeModal,
} from "../../features/user-management/userManagementSlice";

export default function UserManagement() {
  const dispatch = useDispatch();

  const { name, email, role, phoneNumber, address, isToggleModal } =
    useSelector((state) => state.userManagement);

  const handleInputChange = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(closeModal());
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>User Management</h1>
        <button
          className="border border-slate-300 text-gray-400 p-2 rounded"
          onClick={() => dispatch(openModal())}
        >
          Add user
        </button>
      </div>

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
