import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Selectmenu from "./components/SelectMenu";
import { useState } from "react";
import CountryCard from "./components/CountryCard";

function App() {
  const [isdark, setIsDark] = useState(false);
    const textColor = !isdark ? "VeryDarkBlueLightText" : "white";

    const elementBg = isdark ? "DBDME" : "white";

  function changeTheme() {
    setIsDark(!isdark);
    console.log(isdark);
  }
  return (
    <>
      <Navbar onClick={changeTheme} isdark={isdark} textColor={textColor} elementBg={elementBg} />
      <main className="main w-full px-4">
        <div className="w-full  search-select mt-8 flex gap-3 flex-col items-start md:flex-row md:items-center md:justify-between">
          <SearchBar />
          <Selectmenu />
        </div>
        <CountryCard />
      </main>
    </>
  );
}

export default App;
