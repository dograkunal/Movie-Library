import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/dashboard"));
const Details = lazy(() => import("../pages/details"));

function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<h4>Loading...</h4>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/details/:id"
        element={
          <Suspense fallback={<h4>Loading...</h4>}>
            <Details />
          </Suspense>
        }
      />
      <Route />
    </Routes>
  );
}

export default MainRoutes;
