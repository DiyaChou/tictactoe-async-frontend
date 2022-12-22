import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const slice = createSlice({
  name: "registeration",
  initialState,
  reducers: {
    registerPending: (state) => {
      state.isLoading = true;
    },
    registerSucess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    registerFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
    registerReset: (state) => {
      state.isLoading = false;
      state.status = "";
      state.message = "";
    },
  },
});

const { reducer, actions } = slice;

export const { registerFail, registerPending, registerReset, registerSucess } =
  actions;

export default reducer;
