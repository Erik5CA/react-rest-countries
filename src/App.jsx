import { useState } from "react";
import { useEffect } from "react";
import BarSup from "./components/BarSup";
import Card from "./components/Card.jsx";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Modal from "./components/Modal.jsx";
import paises from "./getData.js";
import "./App.css";

/**
 * The main application component.
 * @returns {JSX.Element} The rendered application.
 */
function App() {
  // State variables
  const [countries, setCountries] = useState(paises);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [countrySelect, setCountrySelect] = useState("");

  /**
   * Filters countries based on the given region.
   * @param {string} region - The region to filter by.
   * @returns {Array} The filtered countries.
   */
  const filterRegion = (region) => {
    if (region === "all") {
      return paises;
    }
    const filterCountries = paises.filter(
      (country) => country.region.toLowerCase() === region
    );
    return filterCountries;
  };

  /**
   * Filters countries based on the given search.
   * @param {string} search - The search to filter by.
   * @param {Array} currentCountries - The current countries.
   * @returns {Array} The filtered countries.
   */
  const searchCountry = (search, currentCountries) => {
    const filterCountries = currentCountries.filter((country) =>
      country.name.toLowerCase().startsWith(search)
    );
    return filterCountries;
  };

  // Effect hook to update countries based on filter and search changes
  useEffect(() => {
    const newRegion = filter;
    const newCountriesReg = filterRegion(newRegion);
    if (search !== "") {
      const newCountries = searchCountry(search, newCountriesReg);
      setCountries([...newCountries]);
    } else {
      setCountries([...newCountriesReg]);
    }
  }, [filter, search]);

  // Function to open the modal
  const openModal = () => {
    setModal(true);
  };

  //Function to handle country selection
  const handleSelecCountry = (idCountry) => {
    setCountrySelect(idCountry);
  };

  return (
    <>
      <header>
        <BarSup />
        <section className="container-barra">
          <div className="container-search-filter">
            <Search setSearch={setSearch} search={search} />
            <Filter setFilter={setFilter} />
          </div>
        </section>
      </header>
      <main>
        <div className="container-barra">
          <div className="cards">
            {countries.length !== 0 ? (
              countries?.map((pais) => (
                <Card
                  key={pais.name}
                  pais={pais}
                  openModal={openModal}
                  selection={handleSelecCountry}
                />
              ))
            ) : (
              <h2>No results were found for this search</h2>
            )}
          </div>
        </div>
        {modal && (
          <Modal
            onClose={setModal}
            country={countries.find(
              (country) => country.name === countrySelect
            )}
          />
        )}
      </main>
    </>
  );
}

export default App;
