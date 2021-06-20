import React from "react";
import axios, { AxiosResponse } from "axios";
import { MovieApiResponse } from "../../models/movie-api-response";
import { useState } from "react";
import { MovieData } from "../../models/movie-data";
import styles from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

function SearchBox() {
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();
  const {setMovies} = bindActionCreators(actionCreators, dispatch);

  const getMovies = async function (
    filter: string
  ): Promise<AxiosResponse<MovieApiResponse>> {
    return await axios.get(`https://swapi.dev/api/films/?search=${filter}`);
  };

  const handleChange = async function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (formValue === event.target.value) return;

    const value = event.target.value;
    setFormValue(value);
    let results: MovieData[] = [];
    if (value !== "") results = (await getMovies(value)).data.results;

    setMovies(results);
  };

  return (
    <div className={styles.main}>
      <form>
        <input
          className={styles.searchInput}
          placeholder="Search movie..."
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBox;
