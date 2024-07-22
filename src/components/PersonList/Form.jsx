import { useEffect } from "react";
import { useGetCountriesQuery } from "../../features/person-list/personListData";

export default function Form() {
  const { data: countries = [], error, isLoading } = useGetCountriesQuery();
  useEffect(() => {
    if (!isLoading && !error) {
      console.log("Countries:", countries);
    }
  }, [countries, isLoading, error]);
  return (
    <form>
      <div className="flex flex-col mb-2">
        <label>Name</label>
        <input
          type="text"
          className="bg-slate-200 p-2 rounded text-sm"
          placeholder="name"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Age</label>
        <input
          type="number"
          className="bg-slate-200 p-2 rounded text-sm"
          placeholder="age"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Gender</label>
        <select className="bg-slate-200 p-2 rounded text-sm">
          <option value="female" className="bg-slate-200 p-2 rounded text-sm">
            Female
          </option>
          <option value="male" className="bg-slate-200 p-2 rounded text-sm">
            Male
          </option>
        </select>
      </div>
      <div className="flex flex-col mb-2">
        <label>Occupation</label>
        <input
          type="text"
          className="bg-slate-200 p-2 rounded text-sm"
          placeholder="occupation"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>City</label>
        <input
          type="text"
          className="bg-slate-200 p-2 rounded text-sm"
          placeholder="city"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Country</label>
        <select className="bg-slate-200 p-2 rounded text-sm">
          {countries.map((country) => (
            <option key={country.name.common} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
