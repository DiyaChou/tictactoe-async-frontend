import { useState, useEffect } from "react";
import AlertBox from "../../components/alertBox/AlertBox.comp";
import BigButton from "../../components/bigButton/BigButton.comp";
import Header from "../../components/header/Header.comp";
import InputContainer from "../../components/inputContainer/InputContainer.comp";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "../../utils/commonFormPage.style.css";
import { newUserRegistration } from "./registerationAction";
import spinner from "../../assets/gif/spinner.gif";
import { registerReset } from "./registeration.slice";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const initialData = {
    name: "",
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const dispatch = useAppDispatch();
  const { isLoading, status, message } = useAppSelector(
    (store) => store.register
  );
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      dispatch(registerReset());
    };
  }, [dispatch]);
  useEffect(() => {
    localStorage.getItem("token") && navigate("/home");
  }, [navigate]);

  // const dispatch = useDispatch()
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "input_email":
        setFormData({ ...formData, email: value });
        break;
      case "input_password":
        setFormData({ ...formData, password: value });
        break;
      case "input_username":
        setFormData({ ...formData, username: value });
        break;
      case "input_name":
        setFormData({ ...formData, name: value });
        break;
      default:
        break;
    }
  };
  const handleRegisterOnSubmit: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    dispatch(newUserRegistration(formData));
  };

  return (
    <div className="form_page">
      <div className="backarrow__container">
        <Header />
      </div>
      <div className="heading_container">
        <span className="heading">Create account</span>
        <span className="heading2">Let's get to know you better!</span>
      </div>
      <form className="form" onSubmit={handleRegisterOnSubmit}>
        <div>
          <InputContainer
            label="your name"
            type="text"
            placeholder="Type your name here"
            inputId="input_name"
            value={formData.name}
            handleOnChange={handleOnChange}
          />
          <InputContainer
            label="username"
            type="text"
            placeholder="Type your username here"
            inputId="input_username"
            value={formData.username}
            handleOnChange={handleOnChange}
          />
          <InputContainer
            label="email"
            type="email"
            placeholder="Type your email here"
            inputId="input_email"
            value={formData.email}
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
          {message && <AlertBox text={message} variant={status} />}
          <BigButton
            text="register"
            variant="yellow"
            disabled={status === "success" ? true : false}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
