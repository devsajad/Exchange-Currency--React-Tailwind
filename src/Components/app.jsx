import React, { use, useEffect, useRef, useState } from "react";
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
  const [inputCurrency, setInputCurrency] = useState(1);
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

  const InputEl = useRef(null);

  function handleSelectFromCurrency(value) {
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
    if (value === 0) {
      setInputCurrency("");
    } else if (isFinite(value)) {
      setInputCurrency(value);
    }
  }

  function handFromSearchClick() {
    setShowToCurrency(false);
    setShowFromCurrency((s) => !s);
  }
  function handToSearchClick() {
    setShowFromCurrency(false);
    setShowToCurrency((s) => !s);
  }

  useEffect(() => {
    if (showFromCurrency || showToCurrency) {
      InputEl.current.focus();
    }
  }, [showFromCurrency, showToCurrency]);

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
            inputRef={InputEl}
          />
          <SelectorToCurrency
            toCurrencyValue={toCurrencyValue}
            onSearchClick={handToSearchClick}
            showToCurrency={showToCurrency}
            onSelectToCurrency={handleSelectToCurrency}
            inputRef={InputEl}
          />
          {loading && <Loading />}
          {convertResult && <ConversionResult result={convertResult} />}

          <SubmitForm onClickSubmit={handleClickSubmit} />
        </>
      </FormConverter>
    </div>
  );
}

export default App;
