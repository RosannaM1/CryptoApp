import React from "react";

const CryptoTable = ({ cryptoData, handleClick }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-2 md:px-6 py-3"></th>
          <th className="px-2 md:px-6 py-3">Nombre</th>
          <th className="px-2 md:px-6 py-3">Symbol</th>
          <th className="px-2 md:px-6 py-3">Price Usd</th>
          <th className="px-2 md:px-6 py-3">24h Change(%)</th>
          <th className="px-2 md:px-6 py-3">Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {cryptoData.map((crypto, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            key={index}
            onClick={() => handleClick(crypto)}
          >
            <th className="ml-2 md:ml-8">
              <img src={crypto.iconUrl} style={{ width: 25 }} alt="" />
            </th>
            <td className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {crypto.name}
            </td>
            <td className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {crypto.symbol}
            </td>
            <td className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {crypto.price}
            </td>
            <td className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {crypto["24hVolume"]}
            </td>
            <td className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {crypto.marketCap}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
