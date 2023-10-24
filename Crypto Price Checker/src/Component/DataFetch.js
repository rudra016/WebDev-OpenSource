import React, { useState, useEffect } from 'react';

function CryptoData(coin) {
  const [cryptoData, setCryptoData] = useState([]);
  const cryptoId = coin;

  useEffect(() => {
    // Define the URL of the API
    const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoId}`;

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCryptoData(data); // Store the data in the state
        console.log(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [cryptoId]);

  return (
    <div>
      <h1>Crypto Data for {cryptoId}</h1>
      <pre>{JSON.stringify(cryptoData, null, 2)}</pre>
    </div>
  );
}

export default CryptoData;
