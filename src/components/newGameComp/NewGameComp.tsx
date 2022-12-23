import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./newGameComp.style.css";

const NewGameComponent = () => {
  const navigate = useNavigate();
  return (
    <div
      className="new_game_comp__container"
      onClick={() => navigate("/newGame")}
    >
      <div className="new_game_comp__div">
        <FontAwesomeIcon icon={faPlus} />
        <span>New Game</span>
      </div>
    </div>
  );
};

export default NewGameComponent;
