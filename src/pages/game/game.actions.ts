import {
  fetchSingleGameAPICall,
  sendGameInviteAPICall,
  submitAPICall,
} from "../../api/game.api";
import { SubmitParams } from "../../interface";
import { AppDispatch } from "../../store";
import { board_message_fn } from "../../utils/somefn";
import {
  fetchGameFail,
  fetchGamePending,
  fetchGameSuccess,
  startAnotherGameFail,
  startAnotherGamePending,
  startAnotherGameSuccess,
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
    console.log("get single game result", result);

    if (result) {
      const button_message = board_message_fn({
        status: result.status,
        isMyTurn: result.isMyTurn,
        opponent_name: result.opponent.name,
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

const startAnotherGame = (email: string) => async (dispatch: AppDispatch) => {
  dispatch(startAnotherGamePending());
  try {
    const result: any = await sendGameInviteAPICall(email);
    console.log(result);
    dispatch(startAnotherGameSuccess(result.gameId));
  } catch (error: any) {
    dispatch(startAnotherGameFail(error.response.data.message));
  }
};

const submitTurn = (params: SubmitParams) => async (dispatch: AppDispatch) => {
  dispatch(submitTurnPending());
  try {
    const result: any = await submitAPICall({
      gameId: params.gameId,
      board_pos: params.board_pos,
    });
    console.log("submitTurn result", result);
    if (result) {
      const button_message = board_message_fn({
        status: result.status,
        isMyTurn: result.isMyTurn,
        opponent_name: result.opponent.name,
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

export { getSingleGame, submitTurn, startAnotherGame };
