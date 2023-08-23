import React, { useState } from "react";
import "../../App.scss";

function dropdown() {
  const [value, setValue] = useState("popularity.desc");
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const sortOptions = [
    { label: "Popularity Descending", value: "popularity.desc" },
    { label: "Popularity Ascending", value: "popularity.asc" },
    { label: "Rating Descending", value: "vote_average.desc" },
    { label: "Rating Ascending", value: "vote_average.asc" },
  ];

  return (
    <>
      <label>
        Order:
        <select onChange={handleChange}>
          {sortOptions.map((el, index) => (
            <option value={el.value} key={index}>
              {el.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default dropdown;
