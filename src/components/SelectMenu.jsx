export default function Selectmenu(props) {
  return (
    <select className="select w-[250px] bg-white dark:bg-DBDME font-medium text-sm max-w-xs dark:text-white h-[unset] shadow-[0_0_5px_0px_rgba(0,0,0,0.1)]  rounded-md" onChange={props.change}>
      <option disabled selected>
        Filter by region
      </option>
      <option value="All Regions" className="dark:bg-DBDME dark:text-white">
        All Regions
      </option>
      <option value="Africa" className="dark:bg-DBDME dark:text-white">
        Africa
      </option>
      <option value="Americas" className="dark:text-white">
        Americas
      </option>
      <option value="Asia" className="dark:text-white">
        Asia
      </option>
      <option value="Europe" className="dark:text-white">
        Europe
      </option>
      <option value="Oceania" className="dark:text-white">
        Oceania
      </option>
    </select>
  );
}
