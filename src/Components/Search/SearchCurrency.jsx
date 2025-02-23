/* eslint-disable react/prop-types */
import React from "react";
import ListCurrency from "./List/ListCurrency";

function SearchCurrency({
  children,
  query,
  onSelectFromCurrency,
  onSelectToCurrency,
  InputCurrencyEl,
}) {
  return (
    <div className="search-list z-50 " ref={InputCurrencyEl}>
      <div className="search-input lg:hidden">{children}</div>
      <ListCurrency
        query={query}
        onSelectFromCurrency={onSelectFromCurrency}
        onSelectToCurrency={onSelectToCurrency}
      />
    </div>
  );
}

export default SearchCurrency;
