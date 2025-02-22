import React from "react";

export default function InputCurrency({
  fromCurrenyValue,
  inputCurrency,
  onInputCurrency,
}) {
  return (
    <div className="form-container-style">
      <label className="label-style">Amount</label>
      <div className="flex">
        <span className="text-2xl font-medium">
          {`${fromCurrenyValue.currencySymbol} `}
        </span>
        <input
          type="text"
          className="input-style"
          placeholder={`${inputCurrency}`}
          value={inputCurrency}
          onChange={(e) => onInputCurrency(+e.target.value)}
        />
      </div>
    </div>
  );
}
