import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], details: [], filters: {}, page: 2 };

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

    pageDecrease: (state) => {
      return {
        ...state,
        page: pageNo - 1,
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
      const { payload: { key, value } } = action;
      return {
        ...state,
        filters: { ...state.filters, [key]: value },
      };
    },

    clearFilter: (state, action) => {
      // const value = action.payload;
      /**
       * const {key} = action.payload;
       * const filtersObj = state.filters;
       * delete filtersObj[key];
       */
      // debugger;
      return {
        ...state,
        // filters: {...filtersObj},
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
  pageDecrease,
  getMoreSuccess,
  getDetailSuccess,
  getFilterSuccess,
  getFilterFailure,
  clearFilter,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
