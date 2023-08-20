import React, { useEffect, useState, useRef } from "react";
import HeadSection from "../components/headSection";
import CardContainer from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { getData, getMoreData } from "../services/index";

import "../App.scss";

function Dashboard() {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const [page, setpage] = useState(1);
  const [search, setSearch] = useState("");
  const observer = useRef();
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state && state.Dashboard.data && state.Dashboard.data.payload
  );
  const searchData = search.trim();

  useEffect(() => {
    dispatch(getData(page));
  }, [dispatch, page]);

  const lastItemRef = (node) => {
    if (searchData.length) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(getMoreData(page));
        setpage(page + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  // console.log(data);
  // console.log(page, "Page number");

  return (
    <>
      <header>
        <HeadSection search={search} setSearch={setSearch} />
      </header>
      <section>
        <div className="CardContainer">
          {data &&
            data.map((el, index) => (
              <div key={el.id}>
                {index === data.length - 1 ? (
                  <section ref={lastItemRef}>
                    {!searchData && <h1>LOADING.....</h1>}
                  </section>
                ) : (
                  <CardContainer data={el} path={img_path} key={index} />
                )}
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
