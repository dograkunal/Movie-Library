import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTaskSuccess,
  getTaskFailure,
  getMoreSuccess,
  getDetailSuccess,
} from "../redux/dashboardSlice";

const API_DATA = {
  key: "api_key=d4a48e640b885612cbcb64269d234d4b",
  baseURL: "https://api.themoviedb.org/3",
};

export const getData = createAsyncThunk(
  "GetMovies/Dashboard",
  async (payload, thunkApi) => {
    // debugger;
    try {
      const res = await axios.get(
        `${API_DATA.baseURL}/discover/movie?&page=${payload}&sort_by=popularity.desc&${API_DATA.key}`
      );
      if (res && res.data) {
        thunkApi.dispatch(getTaskSuccess(res.data.results));
      }
    } catch (error) {
      thunkApi.dispatch(getTaskFailure(error));
    }
  }
);

export const getMoreData = createAsyncThunk(
  "GetMoreMovies/Dashboard",
  async (payload, thunkApi) => {
    console.log(payload);
    try {
      const res = await axios.get(
        `${API_DATA.baseURL}/discover/movie?&page=${payload}&sort_by=popularity.desc&${API_DATA.key}`
      );
      if (res && res.data) {
        thunkApi.dispatch(getMoreSuccess(res.data.results));
      }
    } catch (error) {
      thunkApi.dispatch(getTaskFailure(error));
    }
  }
);

export const getSearchData = createAsyncThunk(
  "GetMoreMovies/Dashboard",
  async (payload, thunkApi) => {
    // debugger;
    try {
      const res = await axios.get(
        `${API_DATA.baseURL}/search/movie?${API_DATA.key}&query=${payload}`
      );
      if (res && res.data) {
        thunkApi.dispatch(getTaskSuccess(res.data.results));
      }
    } catch (error) {
      thunkApi.dispatch(getTaskFailure(error));
    }
  }
);

export const getMovieDetails = createAsyncThunk(
  "GetMovieDetails/Dashboard",
  async (payload, thunkApi) => {
    // debugger;
    try {
      const res = await axios.get(
        `${API_DATA.baseURL}/movie/${payload}?${API_DATA.key}`
      );
      if (res && res.data) {
        thunkApi.dispatch(getDetailSuccess(res.data));
      }
    } catch (error) {
      thunkApi.dispatch(getTaskFailure(error));
    }
  }
);

export const FiltersSubmit = async (data, dis) => {
  const url = new URLSearchParams(`${API_DATA.baseURL}/discover/movie?&page=1`);
  console.log(data, "Data");
  data.forEach((el) => {
    if (el.sorting) {
      url.append("sort_by", el.sort);
    }
    if (el.genres) {
      url.append("with_genres", el.genres);
    }
    if (el.language) {
      url.append("with_original_language", el.language);
    }
  });
  url.append("api_key", "d4a48e640b885612cbcb64269d234d4b");
  const newURL = decodeURIComponent(url.toString());

  dis(getFilteredMovies(decodeURIComponent(newURL.toString())));
};

export const getFilteredMovies = createAsyncThunk(
  "GetFilteredMovies/Dashboard",
  async (newURL, thunkApi) => {
    console.log(newURL, "New URL");
    try {
      const res = await axios.get(newURL);
      if (res && res.data) {
        thunkApi.dispatch(getTaskSuccess(res.data.results));
      }
    } catch (error) {
      thunkApi.dispatch(getTaskFailure(error));
    }
  }
);
