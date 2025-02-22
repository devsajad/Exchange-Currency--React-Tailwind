import React, { useState } from "react";
import ListCurrency from "./List/ListCurrency";

function SearchCurrency({
  children,
  query,
  onSelectFromCurrency,
  onSelectToCurrency,
}) {
  return (
    <div className="search-list z-50 ">
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
