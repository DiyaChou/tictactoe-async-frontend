import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  message: "",
  status: "",
};

const slice = createSlice({
  name: "gameInviteSlice",
  initialState,
  reducers: {
    gameInvitePending: (state) => {
      state.isLoading = true;
    },
    gameInviteSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload.message;
    },
    gameInviteFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
    gameInviteReset: (state) => {
      state.isLoading = false;
      state.message = "";
      state.status = "";
    },
  },
});

const { reducer, actions } = slice;

export const {
  gameInvitePending,
  gameInviteFail,
  gameInviteReset,
  gameInviteSuccess,
} = actions;

export default reducer;
