/* eslint-disable react/prop-types */

/**
 * A functional component that represents a single country card.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.pais - The country data object.
 * @param {Function} props.openModal - A function to open the modal.
 * @param {Function} props.selection - A function to handle country selection.
 *
 * @returns {JSX.Element} - The JSX representation of the country card.
 */
export default function Card({ pais, openModal, selection }) {
  const { name, population, flag, region, capital } = pais;
  return (
    <div
      className="card"
      onClick={() => {
        openModal();
        selection(name);
      }}
    >
      <img
        className="card-image"
        src={flag}
        alt={`Country flag: ${name}`}
        loading="lazy"
      />
      <div className="card-titles">
        <h3 className="card-title">{name}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
}
