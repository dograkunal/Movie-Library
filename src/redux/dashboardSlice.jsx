import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], details: [], filters: {}, page: 1 };

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
      // const value = action.payload;
      // debugger;
      return {
        ...state,
        // filters: [
        //   ...state.filters.filter((el) => Object.keys(el)[0] !== value),
        // ],
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
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
