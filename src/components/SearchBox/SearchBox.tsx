import React from "react";
import axios, { AxiosResponse } from "axios";
import { MovieApiResponse } from "../../models/movie-api-response";
import { useState } from "react";
import { MovieData } from "../../models/movie-data";
import styles from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { FetchState } from "../../models/fetch-dispatch-action";

function SearchBox() {
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();
  const {setMovies, setFetchState} = bindActionCreators(actionCreators, dispatch);

  const getMovies = async function (
    filter: string
  ): Promise<AxiosResponse<MovieApiResponse> | undefined> {
    try {
      setFetchState(FetchState.LOADING);
      const data = await axios.get(`https://swapi.dev/api/films/?search=${filter}`);
      setFetchState(FetchState.SUCCESS);
      return data;
    } catch (error) {
      console.error(error);
      setFetchState(FetchState.ERROR);
    }  
  };

  const handleChange = async function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (formValue === event.target.value) return;

    const value = event.target.value;
    setFormValue(value);
    let results: MovieData[] | undefined = [];
    if (value !== "") results = (await getMovies(value))?.data.results;
    if (results !== undefined) setMovies(results);
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
