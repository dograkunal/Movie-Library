import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTaskSuccess, getTaskFailure } from "../redux/dashboardSlice";

const API_DATA = {
  key: "&api_key=d4a48e640b885612cbcb64269d234d4b",
  baseURL: "https://api.themoviedb.org/3",
};

const getData = createAsyncThunk(
  "GetMovies/Dashboard",
  async (payload, thunkApi) => {
    // debugger;
    try {
      const res = await axios.get(
        `${API_DATA.baseURL}/discover/movie?&page=${payload}&sort_by=popularity.desc${API_DATA.key}`
      );
      if (res && res.data) {
        thunkApi.dispatch(getTaskSuccess(res.data.results));
      }
    } catch (error) {
      thunkApi.dispatch(getTaskFailure(error));
    }
  }
);

export default getData;
