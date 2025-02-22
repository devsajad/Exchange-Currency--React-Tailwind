import React, { useEffect, useState } from "react";
import ItemCurrency from "./ItemCurrency";

function ListCurrency({ query, onSelectFromCurrency, onSelectToCurrency }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getCountriesList() {
      try {
        const apiUrl = query
          ? `https://restcountries.com/v3.1/name/${query}`
          : `https://restcountries.com/v3.1/all`;

        const res = await fetch(apiUrl, { signal: controller.signal });
        const data = await res.json();

        const countries = data
          .filter((country) => country.currencies)
          .map((country) => ({
            flag: country.flags.png,
            currencyType: Object.keys(country.currencies)[0],
            currencyDesc: Object.values(country.currencies)[0].name,
            currencySymbol: Object.values(country.currencies)[0].symbol,
          }));
        setCountries(countries);
      } catch (error) {
        console.error(error);
      }
    }
    getCountriesList();
    return () => controller.abort();
  }, [query]);

  return (
    <ul className="overflow-y-scroll h-full lg:h-[40rem]">
      {countries.map((country, i) => {
        return (
          <ItemCurrency
            key={i}
            country={country}
            onSelectFromCurrency={onSelectFromCurrency}
            onSelectToCurrency={onSelectToCurrency}
          />
        );
      })}
    </ul>
  );
}

export default ListCurrency;
