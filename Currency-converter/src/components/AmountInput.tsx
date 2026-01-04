import React from 'react';

interface AmountInputProps {
  amount: number;
  onAmountChange: (amount: number) => void;
}

const AmountInput: React.FC<AmountInputProps> = ({ amount, onAmountChange }) => {
  return (
    <div className="w-full p-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Importo
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(parseFloat(e.target.value) || 0)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        placeholder="Inserisci importo..."
      />
    </div>
  );
};

export default AmountInput;