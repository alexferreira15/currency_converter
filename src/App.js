import React, { useEffect, useState } from 'react';
import './App.css';
import UserInput from './UserInput'


function App() {

  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState('0');
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
    setCurrency1(currency1);
    setAmount2(numberFormat(amount1 * rates[currency2] / rates[currency1]));
  }

  function handleCurrency2Change(currency2) {
    setCurrency2(currency2);
    setAmount2(numberFormat(amount1 * rates[currency2] / rates[currency1]));
  }

  return (
    <div class="main">
      <h1 id="pagetitle">Currency Converter</h1>

      <UserInput
        onAmountChange={handleAmount1Change}
        onCurrency1Change={handleCurrency1Change}
        onCurrency2Change={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency1={currency1}
        currency2={currency2}/>

        <h2 class="result-text">Result:</h2>
        <h2 class="result">{amount2} {currency2}</h2>
    </div>
  );
}

export default App;
