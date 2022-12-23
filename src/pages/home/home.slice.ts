import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  error: "",
  games: [
    // {
    //   createdAt: "string",
    //   game_id: "string",
    //   isMyTurn: undefined,
    //   lastUpdated: "string",
    //   opponent_name: "string",
    //   status: "string",
    //   winner: null,
    // },
  ],
};

const slice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    homeDataFetchPending: (state) => {
      state.isLoading = true;
    },
    homeDataFetchingSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.games = payload;
      state.error = "";
    },
    homeDataFetchingError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.error = payload;
    },
  },
});

const { reducer, actions } = slice;

export const {
  homeDataFetchPending,
  homeDataFetchingError,
  homeDataFetchingSuccess,
} = actions;

export default reducer;
