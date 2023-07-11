export default function SearchBar(props) {
  return (
    <div className="search-bar w-full flex items-center p-3 shadow-[0_0_5px_0px_rgba(0,0,0,0.1)]  rounded-md max-w-[400px] bg-white dark:bg-DBDME">
      <i className="bx bx-search text-xl text-gray-400 w-[10%] dark:text-white"></i>
      <input
      onChange={props.change}
        type="text"
        placeholder="Search for a country..."
        className="w-[90%] h-full focus:outline-none focus:border-none text-sm dark:bg-DBDME dark:text-white"
      />
    </div>
  );
}
