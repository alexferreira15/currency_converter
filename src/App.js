import React, { useEffect, useState } from 'react';
import './App.css';
import UserInput from './UserInput'


function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch("https://api.apilayer.com/fixer/latest?apikey=meokkN4hhGbITlQM4R4Nt571vUUca1R0")
      .then(response => response.json())
      .then(data => setRates(data.rates))
  }, [])

  function numberFormat(number) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1) {
    setAmount2(numberFormat(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(numberFormat(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  return (
    <div>
      <UserInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}/>

      <UserInput
        onAmountChange={setAmount2}
        onCurrencyChange={setCurrency2}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}/>
    </div>
  );
}

export default App;
