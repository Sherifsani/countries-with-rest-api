export default function Selectmenu() {
  return (
    <select className="select select-bordered w-[50%] bg-white font-medium text-sm max-w-xs p-3 shadow-[0_0_5px_0px_rgba(0,0,0,0.1)]  rounded-md">
      <option disabled selected>
        Filter by region
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
