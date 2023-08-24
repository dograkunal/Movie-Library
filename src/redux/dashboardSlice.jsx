import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], details: [], filters: [], page: 2 };

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

    getFilterSuccess: (state, payload) => {
      return {
        ...state,
        filters: payload,
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
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
