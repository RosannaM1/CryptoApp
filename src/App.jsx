import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "../src/Components/SearchInput";
import CryptoTable from "./Components/CryptoTable";
import PaginationButtons from "./Components/PaginationButtons";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Titulo from "./Components/Titulo";

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCryptoData = async () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "25",
          offset: (page - 1) * 25,
        },
        headers: {
          "X-RapidAPI-Key":
            "bde4cc9a09mshf860675d4bcc25bp14e29bjsn92fec84e99d3",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setCryptoData(response.data.data.coins); // Reinicia cryptoData con los nuevos datos
        // Calcula el número total de páginas
        const totalPages = Math.ceil(response.data.data.stats.total / 25);
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCryptoData();
  }, [page, searchTerm]);

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  const disableBothButtons = totalPages === 1;

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const loadLess = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const filteredCryptoData = cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (crypto) => {
    setSelectedCrypto(crypto);
  };
  console.log("Datos filtrados:", filteredCryptoData);

  return (
    <>
    <NavBar/>
    <Titulo/>

      <div className="mx-auto my-0 md:my-8 px-4 md:px-0 max-w-screen-lg">
        <div className="content-center">
          <SearchInput onSearch={handleSearch} />
          <div className="content-center relative overflow-x-auto">
            {filteredCryptoData.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
                No hay datos disponibles
              </div>
            ) : (
              <CryptoTable
                cryptoData={filteredCryptoData}
                handleClick={handleClick}
              />
            )}
          </div>
        </div>
        <PaginationButtons
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          disableBothButtons={disableBothButtons}
          loadLess={loadLess}
          loadMore={loadMore}
        />
      </div>
      <Footer />
    </>
  );
};

export default CryptoList;
