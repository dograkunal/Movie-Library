import React from "react";
import { BsFillStarFill } from "react-icons/bs";

function CardContainer(data) {
  // console.log(data.data);
  return (
    <div className="CardItem">
      <img src={`${data.path}${data.data.poster_path}`} alt="Poster" />
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
