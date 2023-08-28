import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchData, getData } from "../services";
import { getSearchSuccess } from "../redux/dashboardSlice";
import { AiFillHome } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import "../App.scss";

function headSection({ setNav }) {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state && state.Dashboard?.search);

  const handleChange = (e) => {
    dispatch(getSearchSuccess(e.target.value));
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
    dispatch(getData());
    dispatch(getSearchSuccess(""));
  }

  return (
    <div className="headSection">
      <div className="filterBlock">
        <button className="filterMenu" onClick={() => setNav(true)}>
          <HiBars3 color="orange" size="30" />
        </button>
      </div>
      <h1>Movie Library</h1>
      <div className="searchSection">
        <label>Search Movie</label>
        <input
          type="text"
          placeholder="Search ..."
          value={searchData}
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
