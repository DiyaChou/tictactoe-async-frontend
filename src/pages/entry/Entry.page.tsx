import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../components/bigButton/BigButton.comp";
import "./entry.style.css";

const Entry: React.FC = () => {
  console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("token") && navigate("/home");
  }, [navigate]);
  return (
    <div id="entry">
      <div className="entry__titles">
        <span>async</span>
        <span>tic tac toe</span>
      </div>
      <div className="absolute_button_container">
        <BigButton
          text="login"
          handleOnClick={() => navigate("/login")}
          variant="yellow"
        />
        <BigButton
          text="register"
          handleOnClick={() => navigate("/register")}
          variant="blue"
        />
      </div>
    </div>
  );
};

export default Entry;
