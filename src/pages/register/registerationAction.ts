import { userRegistrationAPICall } from "../../api/auth.api";
import { UserRegisterData } from "../../interface";
import { AppDispatch } from "../../store";
import {
  registerFail,
  registerPending,
  registerSucess,
} from "./registeration.slice";

const newUserRegistration =
  (formData: UserRegisterData) => async (dispatch: AppDispatch) => {
    dispatch(registerPending());
    try {
      const result: any = await userRegistrationAPICall(formData);
      const { message } = result;
      console.log(result);
      return dispatch(registerSucess(message));
    } catch (error: any) {
      return dispatch(registerFail(error.response.data.message));
    }
  };

export { newUserRegistration };
