import { useId } from "react";
import css from "./SearchBox.module.css";

function SearchBox({ searchContacts, filterValue }) {
  const findFieldId = useId();
  return (
    <div className={css.search}>
      <label htmlFor={findFieldId} className={css.label}>
        Find Contact
      </label>
      <input
        id={findFieldId}
        value={filterValue}
        name="filter"
        onChange={(e) => searchContacts(e.target.value)}
        className={css.input}
      />
    </div>
  );
}

export default SearchBox;