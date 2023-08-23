import React, { useEffect } from "react";
import { getData } from "../services";
import { AiFillHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getMovieDetails } from "../services";
import DefaultNotFoundImage from "../assets/default.svg";
import { dateBuilder } from "../components/common";
import "../App.scss";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  let img_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, []);

  const details = useSelector(
    (state) =>
      state && state.Dashboard.details && state.Dashboard.details.payload
  );

  //console.log(details);

  function returnHome() {
    navigate(`/`, { replace: true });
  }

  function DefaultImage(e) {
    e.target.src = DefaultNotFoundImage;
  }

  // const getYear = () => {};

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

      {details ? (
        <div className="deatilSection">
          <div className="detailImage">
            <img
              src={`${img_path}${details.poster_path}`}
              alt="Poster"
              onError={DefaultImage}
            />
          </div>
          <div className="detailDiscription">
            <div className="detailTitle">
              <h1>{details.title}</h1>
              <h1>({details.vote_average})</h1>
            </div>
            <h3>
              <b>Release Date:</b> {dateBuilder(new Date(details.release_date))}
            </h3>
            <div className="genresContainer">
              <b>Genres:</b>
              {details &&
                details.genres.map((el) => <h4 key={el.name}>{el.name}</h4>)}
            </div>
            <h3>
              <b>Tagline:</b> {details.tagline}
            </h3>
            <p>
              <b>Discription:</b> {details.overview}
            </p>
          </div>
        </div>
      ) : (
        <h1>loading.....</h1>
      )}
    </>
  );
}

export default Details;
