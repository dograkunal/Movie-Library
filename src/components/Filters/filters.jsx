import React from "react";
import Dropdown from "./dropdown";
import "../../App.scss";

function Filters() {
  return (
    <>
      <div className="sortFilter">
        <Dropdown />
      </div>
      <div className="genresFilter">
        <div>Filter Type 2</div>
        <div>Filter Type 2</div>
        <div>Filter Type 2</div>
      </div>
    </>
  );
}

export default Filters;
