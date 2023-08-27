import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterSuccess } from "../../redux/dashboardSlice";

function Language() {
  const dispatch = useDispatch();

  const selected = useSelector(
    (state) => state && state.Dashboard?.filters?.with_original_language
  );
  console.log(selected, "language");

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(getFilterSuccess({ key: "with_original_language", value }));
    // console.log(e.target.value, "language");
  };

  return (
    <div className="languageWrapper">
      <label>
        <input
          type="radio"
          value="en"
          name="language"
          checked={selected === "en"}
          onChange={handleChange}
        />
        <span>English</span>
      </label>
      <label>
        <input
          type="radio"
          value="ja"
          name="language"
          checked={selected === "ja"}
          onChange={handleChange}
        />
        <span>Japanese</span>
      </label>
      <label>
        <input
          type="radio"
          value="it"
          name="language"
          checked={selected === "it"}
          onChange={handleChange}
        />
        <span>Italian</span>
      </label>
      <label>
        <input
          type="radio"
          value="fr"
          name="language"
          checked={selected === "fr"}
          onChange={handleChange}
        />
        <span>French</span>
      </label>
      <label>
        <input
          type="radio"
          value="ru"
          name="language"
          checked={selected === "ru"}
          onChange={handleChange}
        />
        <span>Russian</span>
      </label>
    </div>
  );
}

export default Language;
