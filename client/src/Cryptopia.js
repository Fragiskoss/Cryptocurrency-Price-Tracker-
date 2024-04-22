import React from "react";

function Cryptopia({ cryptos }) {
  return (
    <div className="container">
      <h1 className="header">Cryptocurrency Prices</h1>
      <ul className="crypto-list">
        {cryptos.map((crypto) => (
          <li key={crypto._id} className="crypto-item">
            {crypto.name} - ${crypto.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cryptopia;
