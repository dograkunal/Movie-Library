import React from "react";
import { useDispatch } from "react-redux";
import { getFilterSuccess } from "../../redux/dashboardSlice";

function genres() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(getFilterSuccess({ genres: value }));
    console.log(e.target.value, "genres");
  };

  const handleClear = () => {
    dispatch(getFilterSuccess({ genres: null }));
  };

  return (
    <div onChange={handleChange} className="genresWrapper">
      <div>
        <input type="radio" value="16" name="genres" />
        <span>Animation</span>
      </div>
      <div>
        <input type="radio" value="53" name="genres" />
        <span>Thriller</span>
      </div>
      <div>
        <input type="radio" value="28" name="genres" />
        <span>Action</span>
      </div>
      <div>
        <input type="radio" value="35" name="genres" />
        <span>Comedy</span>
      </div>
      <div>
        <input type="radio" value="878" name="genres" />
        <span>Si-Fi</span>
      </div>
      <div>
        <input type="radio" value="27" name="genres" />
        <span>Horror</span>
      </div>
      {/* <div>
        <button onClick={handleClear}>Clear</button>
      </div> */}
    </div>
  );
}

export default genres;
