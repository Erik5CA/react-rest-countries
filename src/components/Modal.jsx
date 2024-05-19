/* eslint-disable react/prop-types */

/**
 * This function represents a modal component that displays detailed information about a country.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onClose - A function to close the modal.
 * @param {Object} props.country - The country object containing the details to be displayed.
 * @returns {JSX.Element} - The JSX element representing the modal component.
 */
export default function Modal({ onClose, country }) {
  /**
   * This function closes the modal when called.
   */
  const closeModal = () => {
    onClose(false);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
        <div className="container-modal">
          <img src={country.flag} alt="" className="modal-image" />
          <div>
            <h3 className="modal-title">{country.name}</h3>
            <div className="container-info">
              <div className="modal-titles">
                <p>
                  <span>Native Name:</span> {country.nativeName}
                </p>
                <p>
                  <span>Population:</span> {country.population}
                </p>
                <p>
                  <span>Region:</span> {country.region}
                </p>
                <p>
                  <span>Sub Region:</span> {country.subregion}
                </p>
                <p>
                  <span>Capital:</span> {country.capital}
                </p>
              </div>
              <div className="modal-titles">
                <p>
                  <span>Top Level Domain:</span> {country.topLevelDomain}
                </p>
                <p>
                  <span>Currencies:</span> {country.currencies}
                </p>
                <p>
                  <span>Languages:</span> {country.languages}
                </p>
              </div>
            </div>
            <div>
              <h4>Borders:</h4>
              <div className="container-bordes">
                {country.borders?.map((borde) => (
                  <div key={borde} className="borde">
                    {borde}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
