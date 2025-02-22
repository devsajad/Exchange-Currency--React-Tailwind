import SearchCurrency from "../Search/SearchCurrency";
import React, { useState, useRef, useEffect } from "react";
import SearchInput from "../Search/SearchInput";
import CurrencySelectorDisplay from "./CurrencySelectorDisplay";

function SelectorToCurrency({
  label,
  toCurrencyValue,
  onSearchClick,
  showToCurrency,
  onSelectToCurrency,
}) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  function handleQuery(value) {
    setQuery(value);
  }

  useEffect(() => {
    if (showToCurrency && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showToCurrency]);

  return (
    <div className="text-left form-container-style lg:relative grow-1">
      {showToCurrency ? (
        <>
          <SearchInput
            query={query}
            onQuery={handleQuery}
            onSearchClick={onSearchClick}
          />

          <SearchCurrency query={query} onSelectToCurrency={onSelectToCurrency}>
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
