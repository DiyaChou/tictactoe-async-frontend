import { userLoginAPICall } from "../../api/auth.api";
import { UserLoginData } from "../../interface";
import { AppDispatch } from "../../store";
import { loginFail, loginPending, loginSuccess } from "./login.slice";

const userLogin =
  (formData: UserLoginData) => async (dispatch: AppDispatch) => {
    dispatch(loginPending);
    try {
      const result: any = await userLoginAPICall(formData);
      dispatch(loginSuccess(result.data));
    } catch (error: any) {
      dispatch(loginFail(error.response.data.message));
    }
  };

export { userLogin };
