import { sendGameInviteAPICall } from "../../api/game.api";
import { AppDispatch } from "../../store";
import {
  gameInviteFail,
  gameInvitePending,
  gameInviteSuccess,
} from "./newGame.slice";

const sendPlayerInvite = (email: string) => async (dispatch: AppDispatch) => {
  dispatch(gameInvitePending());
  try {
    const result: any = await sendGameInviteAPICall(email);
    dispatch(gameInviteSuccess(result.message));
  } catch (error: any) {
    dispatch(gameInviteFail(error.message));
  }
};

export { sendPlayerInvite };
