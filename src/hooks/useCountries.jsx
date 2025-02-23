import { useEffect, useState } from "react";

export function useCountries(query) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getCountriesList() {
      try {
        setLoading(true);

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
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getCountriesList();
    return () => controller.abort();
  }, [query]);

  return { countries, loading };
}
