import { useDispatch, useSelector } from "react-redux";
import PersonListItems from "./PersonListItems";
import Modal from "./Modal";

export default function PersonList() {
  const dispatch = useDispatch();
  const personList = useSelector((state) => state.personList.personListData);
  const isModalOpen = useSelector((state) => state.personList.isModalOpen);
  const inputData = useSelector((state) => state.personList.inputData);
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left px-6 py-4">Name</th>
            <th className="text-left px-6 py-4">Age</th>
            <th className="text-left px-6 py-4">Gender</th>
            <th className="text-left px-6 py-4">Occupation</th>
            <th className="text-left px-6 py-4">City</th>
            <th className="text-left px-6 py-4">Country</th>
            <th className="text-left px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {personList.map((item, index) => (
            <PersonListItems key={index} item={item} dispatch={dispatch} />
          ))}
        </tbody>
      </table>

      {isModalOpen && <Modal dispatch={dispatch} inputData={inputData} />}
    </>
  );
}
