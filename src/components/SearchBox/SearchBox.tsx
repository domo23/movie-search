import React from "react";
import { useState } from "react";
import styles from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { debounce } from "lodash";

function SearchBox() {
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();
  const {setMovies} = bindActionCreators(actionCreators, dispatch);

  const handleChange = async function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (formValue === event.target.value) return;
    const value = event.target.value;
    setFormValue(value);
    setMovies(value);
  };

  return (
    <div className={styles.main}>
      <form>
        <input
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
