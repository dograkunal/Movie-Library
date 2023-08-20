import React from "react";
import { useNavigate } from "react-router";
import { BsFillStarFill } from "react-icons/bs";
import DefaultNotFoundImage from "../assets/default.svg";

function CardContainer(data) {
  const navigate = useNavigate();

  function detailsRoute() {
    navigate(`/details/${data.data.id}`, { replace: true });
    console.log("Clicked", data.data);
  }

  function DefaultImage(e) {
    e.target.src = DefaultNotFoundImage;
  }

  return (
    <div className="CardItem" onClick={detailsRoute}>
      <img
        src={`${data.path}${data.data.poster_path}`}
        alt="Poster"
        onError={DefaultImage}
      />
      <div className="CardDetails">
        <p>{data.data.title}</p>
        <div className="StarRating">
          <BsFillStarFill color="orange" />
          <span>{data.data.vote_average}</span>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
