import React from "react";
import { useDispatch } from "react-redux";
import { getSearchData } from "../services";
import { getData } from "../services";
import { AiFillHome } from "react-icons/ai";
import "../App.scss";

function headSection({ search, setSearch }) {
  const searchData = search.trim();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchMovie = (e) => {
    if (e.key == "Enter") {
      if (searchData.length) {
        dispatch(getSearchData(searchData));
      } else {
        console.log("Empty Value");
        returnHome();
      }
    }
  };

  function returnHome() {
    dispatch(getData(1));
    setSearch("");
  }

  return (
    <div className="headSection">
      <h1>Movie Library</h1>
      <div className="searchSection">
        <label>Search Movie</label>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={handleChange}
          onKeyDown={searchMovie}
        />
        <button className="homeBtn" onClick={returnHome}>
          <AiFillHome color="orange" size="30" />
        </button>
      </div>
    </div>
  );
}

export default headSection;
