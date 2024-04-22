import React, { useState, useEffect } from "react";

function CryptoList() {
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/cryptocurrencies")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCryptos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      {cryptos.length > 0 ? (
        cryptos.map((crypto) => (
          <div key={crypto._id}>
            {crypto.name} - ${crypto.price.toFixed(2)}
          </div>
        ))
      ) : (
        <p>No cryptocurrency data available.</p>
      )}
    </div>
  );
}

export default CryptoList;
