import { fetchAllGamesAPICall } from "../../api/game.api";
import { AppDispatch } from "../../store";
import {
  homeDataFetchingError,
  homeDataFetchingSuccess,
  homeDataFetchPending,
} from "./home.slice";

const getAllGames = () => async (dispatch: AppDispatch) => {
  dispatch(homeDataFetchPending());
  try {
    const result: any = await fetchAllGamesAPICall();
    console.log("result", result);
    dispatch(homeDataFetchingSuccess(result));
  } catch (error: any) {
    dispatch(homeDataFetchingError(error.message));
  }
};

export { getAllGames };
