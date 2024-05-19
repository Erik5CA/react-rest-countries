/**
 * A functional component that represents an option in a filter.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the option.
 * @param {function} props.selected - A function to be called when the option is selected.
 * @param {number} props.id - The unique identifier of the option.
 * @param {function} props.setFilter - A function to set the filter based on the option's id.
 *
 * @returns {JSX.Element} - A JSX element representing the option.
 */
export function Option({ name, selected, id, setFilter }) {
  return (
    <div
      onClick={() => {
        setFilter(id);
        selected(name);
      }}
      className="option"
    >
      <p>{name}</p>
    </div>
  );
}
