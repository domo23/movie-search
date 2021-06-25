import React from "react";
import { useState } from "react";
import styles from "./SearchBox.module.css";
import { debounce } from "lodash";

export type Props = {
  onChange: (value: string) => void
}

function SearchBox({onChange}: Props) {
  const [formValue, setFormValue] = useState("");

  const handleChange = async function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;
    if (formValue === value) return;
    setFormValue(value);
    onChange(value);
  };

  return (
    <div className={styles.main} data-testid="search-box">
      <form>
        <input
          data-testid="search-box-input"
          className={styles.searchInput}
          placeholder="Search movie..."
          type="text"
          onChange={debounce(handleChange, 150)}
        />
      </form>
    </div>
  );
}

export default SearchBox;
