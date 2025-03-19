import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Selectmenu from "./components/SelectMenu";
import { useState, useEffect } from "react";
import data from "./data.json";
import CountryPage from "./components/CountryPage";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }
  const handleFilterChange = (e) => {
    setRegion(e.target.value);
    console.log(region);
  };
  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  }

  const dataElem = data
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search);
    })
    .filter((item) => {
      if (region === "" || region === "All Regions") {
        return true;
        // No region selected, show all data
      } else {
        return item.region === region;
      }
    })
    .map((item, index) => (
      <div
        key={index}
        className="country-card bg-White cursor-pointer dark:bg-DBDME flex flex-col gap-2 h-[330px] items-start w-full rounded-md overflow-hidden shadow-md  "
      >
        <img src={item.flags.png} alt="" className="image" />
        <h3 className="font-semibold px-7 mt-5 dark:text-white">{item.name}</h3>
        <div className="details flex flex-col px-7">
          <p>
            <span className="text-sm font-semibold dark:text-white">
              population:{" "}
            </span>
            <span className="text-sm dark:text-white">{item.population}</span>
          </p>
          <p>
            <span className="text-sm font-semibold dark:text-white">
              Region:{" "}
            </span>
            <span className="text-sm dark:text-white">{item.region}</span>
          </p>
          <p>
            <span className="text-sm font-semibold dark:text-white">
              Capital:{" "}
            </span>
            <span className="text-sm dark:text-white">{item.capital}</span>
          </p>
        </div>
      </div>
    ));

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <Navbar onclick={changeTheme} theme={theme} />
        {/* <main className="main w-full px-4 flex flex-col gap-8">
          <div className="search-select w-full  search-select mt-5 flex gap-5 flex-col items-start md:flex-row md:items-center md:justify-between max-w-[1300px]">
            <SearchBar change={handleSearch} search={search} />
            <Selectmenu change={handleFilterChange} />
          </div>
          <div className="card-wrapper w-full max-w-7xl">{dataElem}</div>
        </main> */}
        <CountryPage/>
      </div>
    </>
  );
}

export default App
