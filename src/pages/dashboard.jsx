import React, { useEffect, useState, useRef } from "react";
import HeadSection from "../components/headSection";
import CardContainer from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { getData, getMoreData } from "../services/index";
import { pageIncrease } from "../redux/dashboardSlice";
import Filters from "../views/Filters/filters";
import "../App.scss";

function Dashboard() {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const observer = useRef();
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state && state.Dashboard?.data?.payload);
  const searchData = useSelector((state) => state && state.Dashboard?.search);

  //const searchData = search.trim();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const lastItemRef = (node) => {
    if (searchData.length) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(pageIncrease());
        dispatch(getMoreData());
        // setpage(page + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  console.log(nav);
  // console.log(page, "Page number");

  return (
    <>
      <header>
        <HeadSection nav={nav} setNav={setNav} />
      </header>
      <section>
        <div className="mainContainer">
          <div className={`filterContainer ${nav ? `mobNav` : ""}`}>
            <Filters nav={nav} setNav={setNav} />
          </div>
          <div className="CardContainer">
            {data &&
              data.map((el, index) => (
                <React.Fragment key={el.id}>
                  {index === data.length - 1 ? (
                    <section ref={lastItemRef}>
                      {!searchData && <h1>LOADING.....</h1>}
                    </section>
                  ) : (
                    <CardContainer data={el} path={img_path} key={index} />
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
