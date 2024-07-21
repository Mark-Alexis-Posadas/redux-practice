import { useSelector } from "react-redux";
import PersonListItems from "./PersonListItems";

export default function PersonList() {
  const personList = useSelector((state) => state.personList.personListData);
  return (
    <table className="w-full">
      <thead>
        <th className="text-left px-6 py-4">Name</th>
        <th className="text-left px-6 py-4">Age</th>
        <th className="text-left px-6 py-4">Gender</th>
        <th className="text-left px-6 py-4">Occupation</th>
        <th className="text-left px-6 py-4">City</th>
        <th className="text-left px-6 py-4">Country</th>
        <th className="text-left px-6 py-4">Action</th>
      </thead>
      <tbody>
        {personList.map((item, index) => (
          <PersonListItems key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
}
