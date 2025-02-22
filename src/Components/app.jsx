import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import FormConverter from "./FormConverter";
import InputCurrency from "./Form/InputCurrency";
import SelectorFromCurrency from "./Form/SelectorFromCurrency";
import SelectorToCurrency from "./Form/SelectorToCurrency";
import SubmitForm from "./Form/SubmitForm";
import ConversionResult from "./Form/ConversionResult";
import Loading from "./Icons/Loading";

const API_KEY = "fdf4362fd5e8c91b34801b7b";

function App() {
  const [showFromCurrency, setShowFromCurrency] = useState(false);
  const [showToCurrency, setShowToCurrency] = useState(false);
  const [inputCurrency, setInputCurrency] = useState(0);
  const [convertResult, setConvertResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [fromCurrenyValue, setFromCurrencyValue] = useState({
    flag: "https://www.xe.com/svgs/flags/usd.static.svg",
    currencyType: "USD",
    currencyDesc: "US Dollar",
    currencySymbol: "$",
  });
  const [toCurrencyValue, setToCurrencyValue] = useState({
    flag: "https://www.xe.com/svgs/flags/eur.static.svg",
    currencyType: "EUR",
    currencyDesc: "Euro",
    currencySymbol: "€",
  });

  function handleSelectFromCurrency(value) {
    console.log(value);
    setFromCurrencyValue(value);
    setShowFromCurrency(false);
  }
  function handleSelectToCurrency(value) {
    setToCurrencyValue(value);
    setShowToCurrency(false);
  }

  async function handleClickSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setConvertResult(null);

      const fetchUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrenyValue.currencyType}/${toCurrencyValue.currencyType}/${inputCurrency}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();
      console.log(data);
      setConvertResult(
        data.conversion_result
          ? `${toCurrencyValue.currencySymbol} ${data.conversion_result}`
          : "Sorry we can't convert this currency"
      );

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function handleInputCurrency(value) {
    setInputCurrency(value);
  }
  function handFromSearchClick() {
    setShowFromCurrency((s) => !s);
  }
  function handToSearchClick() {
    setShowToCurrency((s) => !s);
  }

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (fromRef.current && !fromRef.current.contains(event.target)) {
  //       setShowFromCurrency(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="relative lg:static h-dvh">
      <Header />

      <FormConverter>
        <>
          <InputCurrency
            fromCurrenyValue={fromCurrenyValue}
            inputCurrency={inputCurrency}
            onInputCurrency={handleInputCurrency}
          />
          <SelectorFromCurrency
            label="From"
            fromCurrenyValue={fromCurrenyValue}
            onSearchClick={handFromSearchClick}
            showFromCurrency={showFromCurrency}
            onSelectFromCurrency={handleSelectFromCurrency}
          />
          <SelectorToCurrency
            toCurrencyValue={toCurrencyValue}
            onSearchClick={handToSearchClick}
            showToCurrency={showToCurrency}
            onSelectToCurrency={handleSelectToCurrency}
          />
          {loading && <Loading size={10} />}
          {convertResult && <ConversionResult result={convertResult} />}

          <SubmitForm onClickSubmit={handleClickSubmit} />
        </>
      </FormConverter>
    </div>
  );
}

export default App;

// {
//   "result": "success",
//   "documentation": "https://www.exchangerate-api.com/docs",
//   "terms_of_use": "https://www.exchangerate-api.com/terms",
//   "time_last_update_unix": 1740182401,
//   "time_last_update_utc": "Sat, 22 Feb 2025 00:00:01 +0000",
//   "time_next_update_unix": 1740268801,
//   "time_next_update_utc": "Sun, 23 Feb 2025 00:00:01 +0000",
//   "base_code": "USD",
//   "target_code": "IRR",
//   "conversion_rate": 41999.3347,
//   "conversion_result": 41999.3347
// }
