function QuantitaInput({ amount, onChange }) {
  return (
    <div className="flex flex-col w-full mb-4">
      <label className="mb-2 font-bold text-gray-700">
        Importo
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        min="0"
      />
      </div>
      
    );
}
export default QuantitaInput;