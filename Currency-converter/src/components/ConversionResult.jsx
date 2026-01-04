function ConversionRisultato({ convertedAmount, toCurrency }) {
  if (!convertedAmount || convertedAmount === 0) {
    return null;
  }
  return (
    // 2. Il Box del Risultato
    <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center border border-blue-200">
      
      {/* 3. Testo piccolo descrittivo */}
      <p className="text-gray-500 text-sm font-medium">
        Risultato
      </p>

      {/* 4. Il Numero Grande */}
      <p className="text-3xl font-bold text-blue-600 mt-2">
        {convertedAmount} {toCurrency}
      </p>

    </div>
  );
}