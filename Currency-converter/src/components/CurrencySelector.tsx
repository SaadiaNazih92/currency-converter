import React from 'react';

interface CurrencySelectorProps {
  label: string;
  selectedCurrency: string;
  onChangeCurrency: (currency: string) => void;
  currencyOptions: string[];
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ label, selectedCurrency, onChangeCurrency, currencyOptions }) => {
  return (
    <div className="flex flex-col w-full md:w-1/2 p-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={selectedCurrency}
        onChange={(e) => onChangeCurrency(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 shadow-sm"
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;