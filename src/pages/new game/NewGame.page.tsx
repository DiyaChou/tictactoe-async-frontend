import { useState } from "react";
import AlertBox from "../../components/alertBox/AlertBox.comp";
import BigButton from "../../components/bigButton/BigButton.comp";
import Header from "../../components/header/Header.comp";
import InputContainer from "../../components/inputContainer/InputContainer.comp";
import "../../utils/commonFormPage.style.css";

const NewGame: React.FC = () => {
  const alert = {
    message: "Congratulations!! Account created.",
    variant: "success",
  };
  const [email, setEmail] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleNewGameOnSubmit: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    // e.preventDefault();
    // dispatch(newUserRegistration(formData));
  };

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
          {alert.message && (
            <AlertBox text={alert.message} variant={alert.variant} />
          )}
          <BigButton text="Start game" variant="yellow" />
        </div>
      </form>
    </div>
  );
};

export default NewGame;
