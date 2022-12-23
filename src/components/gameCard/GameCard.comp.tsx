import { Game } from "../../interface";
import GameStatus from "./GameStatus";
import "./gameCard.style.css";
import BigButton from "../bigButton/BigButton.comp";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
interface Params {
  gameInfo: Game;
}

const GameCard = (params: Params) => {
  const { gameInfo } = params;
  const navigate = useNavigate();
  const date = dayjs(gameInfo.lastUpdated).format("DD MMMM YYYY, h:mma");
  const handleGameCardClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    navigate("/game/" + gameInfo.game_id);
  };

  return (
    <div className="game_card">
      <span className="game_card__heading">
        Game with {gameInfo.opponent_name}
      </span>
      <GameStatus gameInfo={gameInfo} />
      <span className="game_card__date">{date}</span>
      <BigButton
        class={"card_button"}
        text={gameInfo.isMyTurn ? "Play" : "View Game"}
        variant="yellow"
        handleOnClick={handleGameCardClick}
      />
    </div>
  );
};

export default GameCard;
