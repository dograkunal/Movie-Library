import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { data: [] };

const API_DATA = {
  key: "&api_key=d4a48e640b885612cbcb64269d234d4b",
  baseURL: "https://api.themoviedb.org/3",
};

export const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    getTaskSuccess: (state, payload) => {
      return {
        ...state,
        data: payload,
      };
    },

    getTaskFailure: (state) => {
      return state;
    },

    getMoreSuccess: (state, payload) => {
      // debugger;
      return {
        ...state,
        data: [...state.data, payload],
      };
    },
  },
});

export const { getTaskSuccess, getTaskFailure, getMoreSuccess } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;

//Temporary to check something
export const getMoreData = createAsyncThunk(
  "GetMoreMovies/Dashboard",
  async (payload, thunkApi) => {
    // debugger;
    try {
      const res = await axios.get(
        `${API_DATA.baseURL}/discover/movie?&page=${payload}&sort_by=popularity.desc${API_DATA.key}`
      );
      if (res && res.data) {
        thunkApi.dispatch(getMoreSuccess(res.data.results));
      }
    } catch (error) {
      thunkApi.dispatch(getTaskFailure(error));
    }
  }
);
