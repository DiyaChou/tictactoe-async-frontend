import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isLoading: boolean;
  isAuth: null | boolean;
  error: string;
}

const initialState: InitialState = {
  isLoading: false,
  isAuth: null,
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
