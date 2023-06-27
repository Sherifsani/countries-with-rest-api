export default function SearchBar() {
  return (
    <div className="search-bar w-full flex items-center p-3 shadow-[0_0_5px_0px_rgba(0,0,0,0.1)]  rounded-md max-w-[400px]">
      <i className="bx bx-search text-xl text-gray-400 w-[10%]"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-[90%] h-full focus:outline-none focus:border-none "
      />
    </div>
  );
}
