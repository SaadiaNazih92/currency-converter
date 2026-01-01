function CurrencySelector({ label, currencies, selectedCurrency, onChange }) 
{
    return (
    <div className="flex flex-col w-full mb-4"></div>
    <label className="mb-2 font-bold text-gray-700">
        {label}
      </label>
      <select
        value={selectedCurrency}
        onChange={(e) => onChange(e.target.value)}
        className="..."
      ></select>
      {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
}
export default CurrencySelector;