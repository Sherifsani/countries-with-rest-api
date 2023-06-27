function Navbar({ onClick, isdark, textColor, elementBg }) {

  console.log(textColor, elementBg);

  return (
    <nav
      className={`w-full h-20 flex justify-between items-center py-4 px-2 shadow-md backdrop:filter backdrop-blur-lg backdrop-saturate-200 bg-{elementBg}`}
    >
      <h3 className={`font-bold text-${textColor}`}>Where in the world?</h3>
      <div
        className="theme-switch flex items-center gap-2 cursor-pointer "
        onClick={onClick}
      >
        <i className={`bx bx-moon text-sm text-${textColor}`}></i>
        <span className={`text-sm text-${textColor}`}>Dark Mode</span>
      </div>
    </nav>
  );
}

export default Navbar;
