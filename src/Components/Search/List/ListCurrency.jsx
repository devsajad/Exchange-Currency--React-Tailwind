/* eslint-disable react/prop-types */
import React from "react";
import ItemCurrency from "./ItemCurrency";
import Loading from "../../Icons/Loading";
import { useCountries } from "../../../hooks/useCountries";

function ListCurrency({ query, onSelectFromCurrency, onSelectToCurrency }) {
  const { countries, loading } = useCountries(query);

  return (
    <ul className="overflow-y-scroll h-full lg:h-[40rem] flex flex-col items-center">
      {loading ? (
        <Loading />
      ) : (
        countries.map((country, i) => {
          return (
            <ItemCurrency
              key={i}
              country={country}
              onSelectFromCurrency={onSelectFromCurrency}
              onSelectToCurrency={onSelectToCurrency}
            />
          );
        })
      )}
    </ul>
  );
}

export default ListCurrency;
