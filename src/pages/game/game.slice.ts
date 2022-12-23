import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  status: "",
  game: {
    board: [],
    opponent_name: "",
    isMyTurn: undefined,
    amIX: "",
    status: "",
    message: "",
    button_message: "",
  },
  error: "",
};

const slice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    fetchGamePending: (state) => {
      state.isLoading = true;
    },
    fetchGameSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.game = payload;
      state.error = "";
    },
    fetchGameFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.error = payload;
    },
    resetGame: (state) => {
      state.isLoading = false;
      state.status = "";
      state.game = {
        board: [],
        opponent_name: "",
        isMyTurn: undefined,
        amIX: "",
        status: "",
        message: "",
        button_message: "",
      };
      state.error = "";
    },
  },
});

const { actions, reducer } = slice;

export const { fetchGamePending, fetchGameSuccess, fetchGameFail, resetGame } =
  actions;
export default reducer;
