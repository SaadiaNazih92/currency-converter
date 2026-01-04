function ConversionRisultato({ convertedAmount, toCurrency }) {
  if (!convertedAmount || convertedAmount === 0) {
    return null;
  }