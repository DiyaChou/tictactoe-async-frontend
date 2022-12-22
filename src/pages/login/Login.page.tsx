import { useState, useEffect } from "react";
import AlertBox from "../../components/alertBox/AlertBox.comp";
import BigButton from "../../components/bigButton/BigButton.comp";
import Header from "../../components/header/Header.comp";
import InputContainer from "../../components/inputContainer/InputContainer.comp";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "../../utils/commonFormPage.style.css";
import { userLogin } from "./login.actions";
import spinner from "../../assets/gif/spinner.gif";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialState = {
    username: "",
    password: "",
  };
  const { isLoading, error } = useAppSelector((state) => state.login);
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "input_password":
        setFormData({ ...formData, password: value });
        break;
      case "input_username":
        setFormData({ ...formData, username: value });
        break;
      default:
        break;
    }
  };

  const handleLoginOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(userLogin(formData));
  };

  useEffect(() => {}, []);

  return (
    <div className="form_page">
      <div className="backarrow__container">
        <Header />
      </div>
      <div className="heading_container">
        <span className="heading">Login</span>
        <span className="heading2">Please enter your details</span>
      </div>
      <form className="form" onSubmit={handleLoginOnSubmit}>
        <div>
          <InputContainer
            label="username"
            type="text"
            placeholder="Type your username here"
            inputId="input_username"
            value={formData.username}
            handleOnChange={handleOnChange}
          />
          <InputContainer
            label="password"
            type="password"
            placeholder="Type your password here"
            inputId="input_password"
            value={formData.password}
            handleOnChange={handleOnChange}
          />
        </div>
        <div className="button_container">
          {isLoading && <img src={spinner} alt="Loading" />}
          {error && <AlertBox text={error} variant="error" />}
          <BigButton text="login" variant="yellow" />
        </div>
      </form>
    </div>
  );
};

export default Login;
