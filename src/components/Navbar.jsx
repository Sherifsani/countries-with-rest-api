function Navbar({ onclick, theme }) {
  return (
    <div className="nav-holder w-full shadow-[0_0_5px_0px_rgba(0,0,0,0.1)] backdrop:filter backdrop-blur-lg backdrop-saturate-200 dark:bg-DBDME">
      <nav
        className={`w-full h-[60px] flex justify-between items-center px-4 lg:px-0  max-w-[1300px]`}
      >
        <h3 className={`font-bold text-VeryDarkBlueLightText dark:text-white`}>
          Where in the world?
        </h3>
        <div
          className="theme-switch flex items-center gap-2 cursor-pointer "
          onClick={onclick}
        >
          <i className={`bx bx-moon text-sm text-VeryDarkBlueLightText dark:text-white`}></i>
          <span
            className={`font-bold text-VeryDarkBlueLightText dark:text-white`}
          >
            Dark Mode
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
