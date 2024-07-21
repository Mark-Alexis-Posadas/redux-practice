export default function PersonListItems({ item }) {
  return (
    <tr class="bg-white hover:bg-slate-50 border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 text-left font-medium">{item.name}</td>
      <td className="px-6 py-4 text-left">{item.age}</td>
      <td className="px-6 py-4 text-left">{item.gender}</td>
      <td className="px-6 py-4 text-left">{item.occupation}</td>
      <td className="px-6 py-4 text-left">{item.city}</td>
      <td className="px-6 py-4 text-left">{item.country}</td>
      <td className="px-6 py-4 text-left">
        <div className="flex items-center gap-3">
          <button className="text-blue-500">edit</button>
          <button className="text-red-500">delete</button>
        </div>
      </td>
    </tr>
  );
}
