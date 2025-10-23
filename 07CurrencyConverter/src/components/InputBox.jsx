import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  const currencySelectId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex flex-col sm:flex-row ${className}`}>
      <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount || ""}
          min="0"
          step="0.01"
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          aria-describedby={`${amountInputId}-description`}
        />
        <span id={`${amountInputId}-description`} className="sr-only">
          Enter the amount to convert
        </span>
      </div>
      <div className="w-full sm:w-1/2 flex flex-wrap justify-end text-right">
        <label htmlFor={currencySelectId} className="text-black/40 mb-2 w-full">
          Currency Type
        </label>
        <select
          id={currencySelectId}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full sm:w-auto"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          aria-describedby={`${currencySelectId}-description`}
        >
          <option value={selectCurrency}>{selectCurrency.toUpperCase()}</option>
          {currencyOptions.length > 0 && currencyOptions.map((currency) => (
            currency !== selectCurrency && (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            )
          ))}
        </select>
        <span id={`${currencySelectId}-description`} className="sr-only">
          Select the currency type
        </span>
      </div>
    </div>
  );
}

export default InputBox;