import { useState, useEffect } from 'react';
import ValutaSelector from './components/CrrencySelector';
import QuantitaInput from './components/AountInput';
import ConversionRisultato from './components/ConversionResult';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [error, setError] = useState(null);

 
  const API_KEY = '513dd873d96e5f0ef40c7dd6'; 
  const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;


  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`${BASE_URL}/latest/${fromCurrency}`);
        
        if (!response.ok) {
          throw new Error("Errore nella richiesta API");
        }

        const data = await response.json();
        
        setCurrencies(Object.keys(data.conversion_rates));
        setExchangeRate(data.conversion_rates[toCurrency]);
        setError(null);
      } catch (err) {
        setError("Impossibile recuperare i dati. Controlla la chiave API o la connessione.");
        console.error(err);
      }
    };

    fetchRates();
  }, [fromCurrency, toCurrency, API_KEY]); 

  useEffect(() => {
    if (exchangeRate) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Convertitore di Valuta
        </h1>
        
      
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}

        <QuantitaInput 
          amount={amount} 
          onChange={setAmount} 
        />

        <div className="grid grid-cols-2 gap-4">
          <ValutaSelector 
            label="Da:" 
            currencies={currencies} 
            selectedCurrency={fromCurrency}
            onChange={setFromCurrency}
          />
          <ValutaSelector 
            label="A:" 
            currencies={currencies} 
            selectedCurrency={toCurrency}
            onChange={setToCurrency}
          />
        </div>
        <ConversionRisultato 
          convertedAmount={convertedAmount} 
          toCurrency={toCurrency} 
        />
        
      </div>
    </div>
  );
}

export default App;