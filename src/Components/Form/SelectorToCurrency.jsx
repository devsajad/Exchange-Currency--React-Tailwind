/* eslint-disable react/prop-types */
import SearchCurrency from "../Search/SearchCurrency";
import React, { useState} from "react";
import SearchInput from "../Search/SearchInput";
import CurrencySelectorDisplay from "./CurrencySelectorDisplay";

function SelectorToCurrency({
  label,
  toCurrencyValue,
  onSearchClick,
  showToCurrency,
  onSelectToCurrency,
  inputRef,
  InputCurrencyEl,
}) {
  const [query, setQuery] = useState("");

  function handleQuery(value) {
    setQuery(value);
  }

  return (
    <div className="text-left form-container-style lg:relative grow-1">
      {showToCurrency ? (
        <>
          <SearchInput
            query={query}
            onQuery={handleQuery}
            onSearchClick={onSearchClick}
            inputRef={inputRef}
          />

          <SearchCurrency
            InputCurrencyEl={InputCurrencyEl}
            query={query}
            onSelectToCurrency={onSelectToCurrency}
          >
            <SearchInput
              query={query}
              onQuery={handleQuery}
              onSearchClick={onSearchClick}
            />
          </SearchCurrency>
        </>
      ) : (
        <CurrencySelectorDisplay
          onSearchClick={onSearchClick}
          label={label}
          flagSrc={toCurrencyValue.flag}
          currencyType={toCurrencyValue.currencyType}
          currencyDesc={toCurrencyValue.currencyDesc}
        />
      )}
    </div>
  );
}

export default SelectorToCurrency;
