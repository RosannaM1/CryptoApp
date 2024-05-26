// CryptoDetail.js
import React from 'react';

const CryptoDetail = ({ crypto }) => {
  if (!crypto) {
    return <div>No crypto selected</div>;
  }

  return (
    <div>
      <img src={crypto.iconUrl} alt="" />
      <h2>{crypto.name} ({crypto.symbol})</h2>
      <p>Price: {crypto.price}</p>
      <p>24h Volume: {crypto['24hVolume']}</p>
      <p>Change: {crypto.change}</p>
    </div>
  );
};

export default CryptoDetail;
