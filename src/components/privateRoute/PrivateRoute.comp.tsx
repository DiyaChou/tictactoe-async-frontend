import { useEffect, useLayoutEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginSuccess } from "../../pages/login/login.slice";
import spinner from "../../assets/gif/spinner.gif";

interface Params {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Params) => {
  const { isAuth } = useAppSelector((store) => store.login);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !isAuth && localStorage.getItem("token") && dispatch(loginSuccess());
  }, [dispatch, isAuth]);
  return isAuth === undefined ? (
    <img src={spinner} alt="loading" />
  ) : isAuth === true ? (
    children
  ) : isAuth === false ? (
    <Navigate to="/" />
  ) : null;
};

export default PrivateRoute;
