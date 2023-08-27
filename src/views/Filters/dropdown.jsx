import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterSuccess, clearFilter } from "../../redux/dashboardSlice";
import "../../App.scss";

function dropdown() {
  // const [value, setValue] = useState("popularity.desc");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(getFilterSuccess({ key: "sort_by", value }));
    // console.log(value);
  };

  const sortOptions = [
    { label: "Popularity Descending", value: "popularity.desc" },
    { label: "Popularity Ascending", value: "popularity.asc" },
    { label: "Rating Descending", value: "vote_average.desc" },
    { label: "Rating Ascending", value: "vote_average.asc" },
  ];

  return (
    <>
      <select onChange={handleChange} className="sortSelector">
        {sortOptions.map((el, index) => (
          <option value={el.value} key={index}>
            {el.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default dropdown;
