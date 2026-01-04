import { useState, useEffect } from "react";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConversionResult from "./components/ConversionResult";

interface ExchangeRates {
  [key: string]: number;
}

function App() {
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

  // Funzione per scambiare le valute
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    // SFONDO PAGINA: Beige chiaro (#f3e9d2)
    <div className="min-h-screen bg-[#f3e9d2] font-sans">
      
      {/* INTESTAZIONE: Verde oliva (#6b9048) */}
      <div className="bg-[#6b9048] p-6 shadow-md mb-8">
        <h1 className="text-3xl font-bold text-center text-black tracking-wide">
          Currency Converter
        </h1>
      </div>

      <div className="flex items-center justify-center p-4">
        {/* CARD PRINCIPALE: Ocra scuro (#b47b15) con bordi arrotondati */}
        <div className="bg-[#b47b15] p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-black">
          
          <AmountInput amount={amount} onAmountChange={setAmount} />

          <div className="flex flex-col gap-4 my-6">
            <CurrencySelector
              label="From:"
              selectedCurrency={fromCurrency}
              onChangeCurrency={setFromCurrency}
              currencyOptions={currencyOptions}
            />
            
            {/* PULSANTE FRECCE: Posizionato correttamente TRA i due menu */}
            <div className="flex justify-center -my-2 z-10">
              <button 
                onClick={handleSwapCurrencies}
                className="bg-[#cbb085] hover:bg-[#e0cba8] text-black border-2 border-black p-2 rounded-full shadow-lg transition-transform active:scale-95"
                title="Scambia valute"
              >
                <span className="text-2xl font-bold">⇄</span>
              </button>
            </div>

            <CurrencySelector
              label="To:"
              selectedCurrency={toCurrency}
              onChangeCurrency={handleToCurrencyChange}
              currencyOptions={currencyOptions}
            />
          </div>

          <ConversionResult 
            convertedAmount={convertedAmount} 
            toCurrency={toCurrency} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;