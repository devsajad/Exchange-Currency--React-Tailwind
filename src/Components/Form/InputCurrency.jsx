/* eslint-disable react/prop-types */
import React from "react";

export default function InputCurrency({
  fromCurrenyValue,
  inputCurrency,
  onInputCurrency,
}) {
  return (
    <div className="form-container-style">
      <label className="label-style">Amount</label>
      <div className="flex gap-2">
        <span className="text-2xl font-medium">
          {`${fromCurrenyValue.currencySymbol} `}
        </span>
        <input
          type="text"
          className="input-style text-xl"
          placeholder="Enter amount"
          value={inputCurrency}
          onChange={(e) => onInputCurrency(+e.target.value)}
        />
      </div>
    </div>
  );
}
