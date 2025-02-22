import React from "react";

function ItemCurrency({ country, onSelectFromCurrency, onSelectToCurrency }) {
  const { flag, currencyType, currencyDesc } = country;
  return (
    <li
      onClick={() =>
        onSelectFromCurrency
          ? onSelectFromCurrency(country)
          : onSelectToCurrency(country)
      }
      className="flex gap-3 cursor-pointer hover:bg-gray-50 p-3 w-full"
    >
      <img
        src={flag}
        alt="US flag"
        className="size-5 object-cover rounded-full"
      />
      <p>{`${currencyType} ${currencyDesc}`}</p>
    </li>
  );
}

// {
//   "SHP": {
//       "name": "Saint Helena pound",
//       "symbol": "£"
//   }
// }
export default ItemCurrency;
