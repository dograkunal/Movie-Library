import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import getData from "../services/index";
import CardContainer from "../components/card";
import { getMoreData } from "../redux/dashboardSlice";

import "../App.scss";

function Dashboard() {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state && state.Dashboard.data && state.Dashboard.data.payload
  );
  console.log(data);

  useEffect(() => {
    dispatch(getData(1));
  }, []);

  useEffect(() => {
    dispatch(getMoreData(2));
  }, []);

  return (
    <section>
      <div className="CardContainer">
        {data &&
          data.map((el, index) => (
            <React.Fragment key={index}>
              <CardContainer data={el} path={img_path} key={index} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}

export default Dashboard;
