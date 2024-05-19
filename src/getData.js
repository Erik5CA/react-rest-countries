import paises from "./data.json";

/**
 * This function is used to get the names of the countries that border a given country.
 * @param {string[]} borders - An array of alpha3Code of bordering countries.
 * @returns {string[]} An array of names of bordering countries.
 */
const getBorders = (borders) => {
  const newBorders = borders?.map((borde) => {
    const newBorde = paises.find((pais) => {
      if (pais.alpha3Code === borde) {
        return pais;
      }
    });
    return newBorde.name;
  });
  return newBorders;
};

/**
 * This function is used to transform the raw data into a more usable format.
 * @param {Object[]} paises - An array of country objects.
 * @returns {Object[]} An array of transformed country objects.
 */
const newPaises = paises.map((pais) => ({
  name: pais.name,
  nativeName: pais.nativeName,
  population: pais.population.toLocaleString("es-MX"),
  region: pais.region,
  subregion: pais.subregion,
  capital: pais?.capital,
  topLevelDomain: pais.topLevelDomain[0],
  currencies: pais?.currencies?.map((curr) => curr.name),
  languages: pais.languages?.map((lan) => lan.name),
  borders: getBorders(pais?.borders),
  flag: pais.flags.png,
}));

export default newPaises;
