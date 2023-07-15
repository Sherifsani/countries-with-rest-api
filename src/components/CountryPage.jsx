export default function CountryPage(){
    return (
      <div>
        <div className="back bg-white dark:bg-DBDME rounded-md flex gap-2 items-center w-[80px]">
          <div className="bx bx-arrow-back"></div>
          <p>Back</p>
        </div>
        <div className="page-main">
          <div className="img">
            <img src="https://flagcdn.com/um.svg" alt="" />
          </div>
          <div className="desc"></div>
        </div>
      </div>
    );
}