import React from "react";
import { useDispatch } from "react-redux";
import { getFilterSuccess, clearFilter } from "../../redux/dashboardSlice";
import { useState } from "react";

function genres() {
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSelected(e.target.value);
    const { value } = e.target;
    dispatch(clearFilter("genres"));
    dispatch(getFilterSuccess({ ["genres"]: value }));
    console.log(e.target.value, "genres");
  };

  const handleClear = () => {
    dispatch(clearFilter("genres"));
    setSelected("");
  };

  return (
    <div className="genresWrapper">
      <div>
        <input
          type="radio"
          value="16"
          checked={selected === "16"}
          onChange={handleChange}
        />
        <span>Animation</span>
      </div>
      <div>
        <input
          type="radio"
          value="53"
          checked={selected === "53"}
          onChange={handleChange}
        />
        <span>Thriller</span>
      </div>
      <div>
        <input
          type="radio"
          value="28"
          checked={selected === "28"}
          onChange={handleChange}
        />
        <span>Action</span>
      </div>
      <div>
        <input
          type="radio"
          value="35"
          checked={selected === "35"}
          onChange={handleChange}
        />
        <span>Comedy</span>
      </div>
      <div>
        <input
          type="radio"
          value="878"
          checked={selected === "878"}
          onChange={handleChange}
        />
        <span>Si-Fi</span>
      </div>
      <div>
        <input
          type="radio"
          value="27"
          checked={selected === "27"}
          onChange={handleChange}
        />
        <span>Horror</span>
      </div>
      <div className="submitBtn">
        <button onClick={handleClear} className="filterSubmit">
          Clear Genres
        </button>
      </div>
    </div>
  );
}

export default genres;
