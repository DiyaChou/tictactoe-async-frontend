import axios from "axios";
import { UserRegisterData, UserLoginData } from "../interface";
const baseUrl = process.env.REACT_APP_BASE_URL;
const authUrl = baseUrl + "/user";
const registerUrl = authUrl + "/register";
const loginUrl = authUrl + "/login";

const userRegistrationAPICall = (formData: UserRegisterData) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(registerUrl, formData)
        .then((result) => resolve(result.data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const userLoginAPICall = (formData: UserLoginData) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(loginUrl, formData)
        .then((result) => {
          localStorage.setItem("token", result.data.accessJWT);
          resolve(result.data);
        })
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

export { userRegistrationAPICall, userLoginAPICall };
