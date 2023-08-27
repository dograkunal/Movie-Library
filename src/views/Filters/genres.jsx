import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterSuccess } from "../../redux/dashboardSlice";

function genres() {
  const dispatch = useDispatch();
  const selected = useSelector(
    (state) => state && state.Dashboard?.filters?.with_genres
  );
  console.log(selected, "genres");

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(getFilterSuccess({ key: "with_genres", value }));
    // console.log(e.target.value, "genres");
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
    </div>
  );
}

export default genres;
