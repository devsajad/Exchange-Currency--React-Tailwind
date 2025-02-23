/* eslint-disable react/prop-types */
import SearchCurrency from "../Search/SearchCurrency";
import React, { useState } from "react";
import SearchInput from "../Search/SearchInput";
import CurrencySelectorDisplay from "./CurrencySelectorDisplay";

function SelectorFromCurrency({
  label,
  fromCurrenyValue,
  onSearchClick,
  showFromCurrency,
  onSelectFromCurrency,
  inputRef,
  InputCurrencyEl,
}) {
  const [query, setQuery] = useState("");

  function handleQuery(value) {
    setQuery(value);
  }

  return (
    <div className="text-left form-container-style lg:relative grow-1">
      {showFromCurrency ? (
        <>
          <SearchInput
            query={query}
            onQuery={handleQuery}
            onSearchClick={onSearchClick}
            inputRef={inputRef}
          />

          <SearchCurrency
            query={query}
            onSelectFromCurrency={onSelectFromCurrency}
            InputCurrencyEl={InputCurrencyEl}
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
          flagSrc={fromCurrenyValue.flag}
          currencyType={fromCurrenyValue.currencyType}
          currencyDesc={fromCurrenyValue.currencyDesc}
        />
      )}
    </div>
  );
}

export default SelectorFromCurrency;
