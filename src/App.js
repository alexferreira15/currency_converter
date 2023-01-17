import React, { useEffect } from 'react';
import './App.css';
import Row from './row'


function App() {

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "SEzThlSFfeoSLSQ5FZjx5YczKZWdptqx");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/convert?to=GBP&from=JPY&amount=25", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div>
      <h1>Converter:</h1>
      <Row />
      <h1>|</h1>
      <Row />
    </div>
  );
}

export default App;
