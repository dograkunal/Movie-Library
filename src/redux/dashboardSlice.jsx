import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  details: [],
  filters: {},
  search: "",
  page: 1,
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

    pageIncrease: (state) => {
      return {
        ...state,
        page: state.page + 1,
      };
    },

    getMoreSuccess: (state, action) => {
      const previouslist = state.data.payload;
      return {
        ...state,
        data: {
          payload: [...previouslist, ...action.payload],
        },
      };
    },

    getSearchSuccess: (state, action) => {
      //debugger;
      return {
        ...state,
        search: action.payload,
      };
    },

    getDetailSuccess: (state, payload) => {
      // debugger;
      return {
        ...state,
        details: payload,
      };
    },

    getFilterSuccess: (state, action) => {
      const {
        payload: { key, value },
      } = action;
      // console.log(action.payload, "action");
      return {
        ...state,
        filters: { ...state.filters, [key]: value },
      };
    },

    clearFilter: (state, action) => {
      return {
        ...state,
        filters: {},
      };
    },

    getFilterFailure: (state) => {
      return state;
    },
  },
});

export const {
  getTaskSuccess,
  getTaskFailure,
  pageIncrease,
  getMoreSuccess,
  getDetailSuccess,
  getFilterSuccess,
  getFilterFailure,
  clearFilter,
  getSearchSuccess,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
