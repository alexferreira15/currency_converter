import React from 'react';

export default function UserInput(props) {
  return (
    <div>
      <input type='number' value={props.amount} onChange={e => props.onAmountChange(e.target.value)} />

      <select value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
        {props.currencies.map((currency => (
          <option key={currency} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}
