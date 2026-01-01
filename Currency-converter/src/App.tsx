import { useState, useEffect } from 'react';
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
      // ... codice per scaricare ...
    };

    fetchRates();
  }, [fromCurrency, toCurrency]);
  useEffect(() => {
    if (exchangeRate) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);
  return (
    <div className="min-h-screen bg-gray-100...">
      {/* ... */}
         {error && <p className="text-red-500...">{error}</p>}
      {/* ... */}
    </div>
  );