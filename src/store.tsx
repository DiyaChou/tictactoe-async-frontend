import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import gameReducer from "./pages/game/game.slice";
import submitReducer from "./pages/game/submitTurn.slice";
import homeReducer from "./pages/home/home.slice";
import loginReducer from "./pages/login/login.slice";
import newGameReducer from "./pages/new game/newGame.slice";
import registerReducer from "./pages/register/registeration.slice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    newGame: newGameReducer,
    home: homeReducer,
    game: gameReducer,
    submit: submitReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
