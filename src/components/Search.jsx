/**
 * A functional component that renders a search bar with an icon and a placeholder.
 * It also handles the search input change and updates the search state.
 *
 * @param {Object} props - The component's props.
 * @param {Function} props.setSearch - A function to update the search state.
 *
 * @returns {JSX.Element} - The rendered search bar component.
 */
export default function Search({ setSearch }) {
  /**
   * Handles the change event of the search input.
   * Updates the search state with the lowercase value of the input.
   *
   * @param {SyntheticEvent} e - The change event.
   */
  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearch(search.toLowerCase());
  };

  return (
    <div className=" container-search">
      <svg
        width={"15px"}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        onChange={handleSearchChange}
        type="search"
        className="input-search"
        placeholder="Search for a country.."
      />
    </div>
  );
}
