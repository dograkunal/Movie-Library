import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./redux/dashboardSlice";

export default configureStore({
  reducer: {
    Dashboard: DashboardReducer,
  },
});
