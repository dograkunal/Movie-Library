import React from "react";
import { getData } from "../services";
import { AiFillHome } from "react-icons/ai";
import Image from "../assets/spiderman.jpg";
import "../App.scss";

function Details() {
  function returnHome() {
    dispatch(getData());
  }

  return (
    <>
      <div className="headSection">
        <h1>Movie Detail</h1>
        <div>
          <button className="homeBtn" onClick={returnHome}>
            <AiFillHome color="orange" size="30" />
          </button>
        </div>
      </div>

      <div className="deatilSection">
        <div className="detailImage">
          <img src={Image} alt="Poster" />
        </div>
        <div className="detailDiscription">
          <div className="detailTitle">
            <h1>Titleeee</h1>
            <h1>(Rating)</h1>
          </div>
          <h3>Year | Length | Director</h3>
          <h4>Cast: Actor 1, Actor 2, Actor 3 ...</h4>
          <p>
            Discription: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
