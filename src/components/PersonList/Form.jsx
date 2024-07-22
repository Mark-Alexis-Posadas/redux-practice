export default function Form() {
  return (
    <form>
      <div className="flex flex-col mb-2">
        <label>Name</label>
        <input type="text" className="bg-slate-200 p-2 rounded text-sm" />
      </div>
      <div className="flex flex-col mb-2">
        <label>Age</label>
        <input type="number" className="bg-slate-200 p-2 rounded text-sm" />
      </div>
      <div className="flex flex-col mb-2">
        <label>Gender</label>
        <select className="bg-slate-200 p-2 rounded text-sm">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div className="flex flex-col mb-2">
        <label>Occupation</label>
        <input type="text" className="bg-slate-200 p-2 rounded text-sm" />
      </div>
      <div className="flex flex-col mb-2">
        <label>City</label>
        <input type="text" className="bg-slate-200 p-2 rounded text-sm" />
      </div>
      <div className="flex flex-col mb-2">
        <label>Country</label>
        <select className="bg-slate-200 p-2 rounded text-sm">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
    </form>
  );
}
