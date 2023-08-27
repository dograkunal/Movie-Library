import React from "react";
import Dropdown from "./dropdown";
import Genres from "./genres";
import Language from "./Language";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../redux/dashboardSlice";
import { FiltersSubmit } from "../../services";
import "../../App.scss";

function Filters() {
  const dispatch = useDispatch();
  const filtersData = useSelector((state) => state && state.Dashboard?.filters);
  // console.log(filtersData, "filters");
  const store = useSelector((state) => state);

  const handleClear = () => {
    dispatch(clearFilter());
  };

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
      <div className="submitBtn">
        <button onClick={handleClear} className="filterSubmit">
          Clear Filters
        </button>
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
