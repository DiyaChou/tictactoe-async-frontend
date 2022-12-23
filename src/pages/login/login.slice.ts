import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuth = false;
    },
    loginReset: (state) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = false;
    },
    loginErrorReset: (state) => {
      state.error = "";
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginSuccess, loginFail, loginPending, loginErrorReset } =
  actions;

export default reducer;
