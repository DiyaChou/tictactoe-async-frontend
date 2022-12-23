import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  error: "",
};

const slice = createSlice({
  name: "submitSlice",
  initialState,
  reducers: {
    submitTurnPending: (state) => {
      state.isLoading = true;
    },
    submitTurnSucess: (state) => {
      state.isLoading = false;
      state.status = "success";
      state.error = "";
    },
    submitTurnFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.error = payload;
    },
    submitTurnReset: (state) => {
      state.isLoading = false;
      state.status = "";
      state.error = "";
    },
  },
});

const { reducer, actions } = slice;

export const {
  submitTurnFail,
  submitTurnPending,
  submitTurnReset,
  submitTurnSucess,
} = actions;

export default reducer;
