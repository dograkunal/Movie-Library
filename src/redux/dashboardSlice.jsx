import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], details: [], filters: [] };

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
  },
});

export const {
  getTaskSuccess,
  getTaskFailure,
  getMoreSuccess,
  getDetailSuccess,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
