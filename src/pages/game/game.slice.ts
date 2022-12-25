import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  status: "",
  game: {
    board: [],
    opponent: { name: "", email: "" },
    isMyTurn: undefined,
    amIX: "",
    status: "",
    message: "",
    button_message: "",
  },
  error: "",
  startAnotherGameIsLoading: false,
  new_game_id: "",
  startAnotherGameError: "",
  startAnotherGameStatus: "",
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
        opponent: { name: "", email: "" },
        isMyTurn: undefined,
        amIX: "",
        status: "",
        message: "",
        button_message: "",
      };
      state.error = "";
      state.startAnotherGameIsLoading = false;
      state.new_game_id = "";
      state.startAnotherGameError = "";
      state.startAnotherGameStatus = "";
    },

    startAnotherGamePending: (state) => {
      state.startAnotherGameIsLoading = true;
    },
    startAnotherGameSuccess: (state, { payload }) => {
      state.startAnotherGameIsLoading = false;
      state.startAnotherGameStatus = "success";
      state.new_game_id = payload;
    },
    startAnotherGameFail: (state, { payload }) => {
      state.startAnotherGameIsLoading = false;

      state.startAnotherGameStatus = "error";
      state.startAnotherGameError = payload;
    },
  },
});

const { actions, reducer } = slice;

export const {
  fetchGamePending,
  fetchGameSuccess,
  fetchGameFail,
  resetGame,
  startAnotherGamePending,
  startAnotherGameSuccess,
  startAnotherGameFail,
} = actions;
export default reducer;
