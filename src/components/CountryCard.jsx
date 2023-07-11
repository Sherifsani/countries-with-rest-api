export default function CountryCard() {
  return (
    <div className="country-card flex flex-col gap-2 items-start w-full rounded-md overflow-hidden shadow-sm pb-10 bg-red-100">
      <img src="https://flagcdn.com/lu.svg" alt="" />
      <h3 className="font-semibold px-3">Afghanistan</h3>
      <div className="details flex flex-col p-3">
        <p>
          <span className="text-sm font-medium">population: </span>
          <span className="text-sm">1123443</span>
        </p>
        <p>
          <span className="text-sm font-medium">Region: </span>
          <span className="text-sm">Asia</span>
        </p>
        <p>
          <span className="text-sm font-medium">Capital: </span>
          <span className="text-sm">Araolem</span>
        </p>
      </div>
    </div>
  );
}
