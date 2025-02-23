import React  from "react";

export default function CurrencySelectorDisplay({
  onSearchClick,
  label,
  flagSrc,
  currencyType,
  currencyDesc,
}) {
  return (
    <div
      onClick={onSearchClick}
      className="cursor-pointer flex justify-between items-center"
    >
      <div>
        <label className="label-style cursor-pointer">{label}</label>
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            src={flagSrc}
            alt="flag"
            className="size-5 object-cover rounded-full cursor-pointer"
          />
          <p className="font-medium text-lg cursor-pointer">
            {currencyType}{" "}
            <span className="text-gray-600">- {currencyDesc}</span>
          </p>
        </div>
      </div>
      <ArrowBottom />
    </div>
  );
}

const ArrowBottom = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="inherit"
      viewBox="0 0 16 10"
      aria-hidden="true"
      width="24"
      color="inherit"
      className="-top-1 right-[12px] w-4 self-center justify-self-end text-greyblue-300"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 9.5L.5 2 1.55.95 8 7.4 14.45.95 15.5 2 8 9.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
