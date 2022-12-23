import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginSuccess } from "../../pages/login/login.slice";

interface Params {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Params) => {
  const { isAuth } = useAppSelector((store) => store.login);
  const dispatch = useAppDispatch();
  useEffect(() => {
    !isAuth && localStorage.getItem("token") && dispatch(loginSuccess());
  }, [dispatch, isAuth]);

  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
