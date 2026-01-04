import { useState, useEffect } from "react";
// Corretti gli errori di battitura negli import:
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConversionResult from "./components/ConversionResult";

interface ExchangeRates {
  [key: string]: number;
}

function App() {
  // Definiamo i tipi per lo stato (TypeScript ora sa cosa aspettarsi)
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        // TypeScript ora sa che data.rates è un oggetto di numeri
        const rates: ExchangeRates = data.rates;
        setCurrencyOptions([...Object.keys(rates)]);
        setExchangeRate(rates[toCurrency]);
      })
      .catch((error) => console.error("Errore API:", error));
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (amount != null && exchangeRate) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleToCurrencyChange = (currency: string) => {
    setToCurrency(currency);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Convertitore Valuta
        </h1>

        <AmountInput amount={amount} onAmountChange={setAmount} />

        <div className="flex flex-col md:flex-row justify-between my-4">
          <CurrencySelector
            label="Da"
            selectedCurrency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            currencyOptions={currencyOptions}
          />
          
          <div className="flex items-center justify-center pt-4 md:pt-0">
            <span className="text-2xl">⇄</span>
          </div>

          <CurrencySelector
            label="A"
            selectedCurrency={toCurrency}
            onChangeCurrency={handleToCurrencyChange}
            currencyOptions={currencyOptions}
          />
        </div>

        <ConversionResult 
          convertedAmount={convertedAmount} 
          toCurrency={toCurrency} 
        />
        
        <div className="mt-4 text-center text-xs text-gray-400">
          Tasso: 1 {fromCurrency} = {exchangeRate} {toCurrency}
        </div>
      </div>
    </div>
  );
}

export default App;