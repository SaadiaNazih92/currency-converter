import React from 'react';

interface ConversionResultProps {
  convertedAmount: string | null;
  toCurrency: string;
}

const ConversionResult: React.FC<ConversionResultProps> = ({ convertedAmount, toCurrency }) => {
  if (!convertedAmount) return null;

  return (
    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200 text-center animate-pulse">
      <h2 className="text-xl text-gray-600">Risultato Conversione:</h2>
      <p className="text-3xl font-bold text-green-700 mt-2">
        {convertedAmount} {toCurrency}
      </p>
    </div>
  );
};

export default ConversionResult;