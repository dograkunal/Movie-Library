import React from "react";
import Dropdown from "./dropdown";
import Genres from "./genres";
import Language from "./Language";
import { useDispatch, useSelector } from "react-redux";
import { FiltersSubmit } from "../../services";
import "../../App.scss";

function Filters() {
  const dispatch = useDispatch();
  const filtersData = useSelector((state) => state && state.Dashboard?.filters);
  // eslint-disable-next-line no-unused-vars
  const store = useSelector((state) => state);
  // console.log(filtersData, "filters");

  return (
    <>
      <div className="sortFilter">
        <div className="filterHead">Sort</div>
        <Dropdown />
      </div>
      <div className="genresFilter">
        <div className="filterHead">Select Genres</div>
        <Genres />
      </div>
      <div className="languageFilter">
        <div className="filterHead">Select Original Language</div>
        <Language />
      </div>
      <div>
        <button
          className="filterSubmit"
          onClick={() => FiltersSubmit(filtersData, dispatch, store)}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Filters;
