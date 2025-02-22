import SearchCurrency from "../Search/SearchCurrency";
import React, { useState, useRef, useEffect } from "react";
import SearchInput from "../Search/SearchInput";
import CurrencySelectorDisplay from "./CurrencySelectorDisplay";

function SelectorFromCurrency({
  label,
  fromCurrenyValue,
  onSearchClick,
  showFromCurrency,
  onSelectFromCurrency,
}) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  function handleQuery(value) {
    setQuery(value);
  }

  useEffect(() => {
    if (showFromCurrency && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showFromCurrency]);

  return (
    <div className="text-left form-container-style lg:relative grow-1">
      {showFromCurrency ? (
        <>
          <SearchInput
            query={query}
            onQuery={handleQuery}
            onSearchClick={onSearchClick}
          />

          <SearchCurrency
            query={query}
            onSelectFromCurrency={onSelectFromCurrency}
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
