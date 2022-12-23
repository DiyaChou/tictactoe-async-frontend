import { fetchSingleGameAPICall, submitAPICall } from "../../api/game.api";
import { SubmitParams } from "../../interface";
import { AppDispatch } from "../../store";
import { board_message_fn } from "../../utils/somefn";
import {
  fetchGameFail,
  fetchGamePending,
  fetchGameSuccess,
} from "./game.slice";
import {
  submitTurnFail,
  submitTurnPending,
  submitTurnSucess,
} from "./submitTurn.slice";

const getSingleGame = (gameId: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchGamePending());
  try {
    const result: any = await fetchSingleGameAPICall(gameId);
    if (result) {
      const button_message = board_message_fn({
        status: result.status,
        isMyTurn: result.isMyTurn,
        opponent_name: result.opponent_name,
      });
      result.button_message = button_message;
      dispatch(fetchGameSuccess(result));
      return;
    }
    dispatch(fetchGameFail("error occured"));
  } catch (error: any) {
    dispatch(fetchGameFail(error.message));
  }
};

const submitTurn = (params: SubmitParams) => async (dispatch: AppDispatch) => {
  dispatch(submitTurnPending());
  try {
    const result: any = await submitAPICall({
      gameId: params.gameId,
      board_pos: params.board_pos,
    });
    if (result) {
      const button_message = board_message_fn({
        status: result.status,
        isMyTurn: result.isMyTurn,
        opponent_name: result.opponent_name,
      });
      result.button_message = button_message;
      dispatch(submitTurnSucess());
      dispatch(fetchGameSuccess(result));
      return;
    }
    dispatch(submitTurnFail("error occured"));
  } catch (error: any) {
    console.log(error);
    dispatch(submitTurnFail(error.response.data.message));
  }
};

export { getSingleGame, submitTurn };
