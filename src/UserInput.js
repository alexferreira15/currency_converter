import React from 'react';
import './UserInput.css';

export default function UserInput(props) {
  return (
    <div class="userinput d-flex justify-content-around">
      <input class="amountinput" type='text' value={props.amount} onChange={e => props.onAmountChange(e.target.value)} />


      <select class='currencies' value={props.currency1} onChange={e => props.onCurrency1Change(e.target.value)}>
        {props.currencies.map((currency => (
          <option key={currency} value={currency}>{currency}</option>
          )))}
      </select>

      <span class="align-self-center">&#8594;</span>

      <select class='currencies' value={props.currency2} onChange={e => props.onCurrency2Change(e.target.value)}>
        {props.currencies.map((currency => (
          <option key={currency} value={currency}>{currency}</option>
          )))}
      </select>

    </div>
  );
}
