import { useState, useEffect } from "react";
import AlertBox from "../../components/alertBox/AlertBox.comp";
import BigButton from "../../components/bigButton/BigButton.comp";
import Header from "../../components/header/Header.comp";
import InputContainer from "../../components/inputContainer/InputContainer.comp";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "../../utils/commonFormPage.style.css";
import { sendPlayerInvite } from "./newGame.actions";
import { gameInviteReset } from "./newGame.slice";

const NewGame: React.FC = () => {
  const dispatch = useAppDispatch();
  const { message, status, isLoading } = useAppSelector(
    (state) => state.newGame
  );
  const [email, setEmail] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleNewGameOnSubmit: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    dispatch(sendPlayerInvite(email));
    // dispatch(newUserRegistration(formData));
  };

  useEffect(() => {
    return () => {
      dispatch(gameInviteReset());
    };
  }, []);

  return (
    <div className="form_page">
      <div className="backarrow__container">
        <Header />
      </div>
      <div className="heading_container">
        <span className="heading">Start a new game</span>
        <span className="heading2">Whom do you want to play with?</span>
      </div>
      <form action="" className="form" onSubmit={handleNewGameOnSubmit}>
        <div>
          <InputContainer
            label="email"
            type="email"
            placeholder="Type your email here"
            inputId="input_email"
            value={email}
            handleOnChange={handleOnChange}
          />
        </div>

        <div className="button_container">
          {message && status && <AlertBox text={message} variant={status} />}
          <BigButton text="Start game" variant="yellow" />
        </div>
      </form>
    </div>
  );
};

export default NewGame;
