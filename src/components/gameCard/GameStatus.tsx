import { Game } from "../../interface";

interface Params {
  gameInfo: Game;
}

const GameStatus = (params: Params) => {
  const { status, opponent_name, winner, isMyTurn, createdAt, lastUpdated } =
    params.gameInfo;

  return (
    <span className="game_card__status">
      {status && status === "drawn"
        ? "It's a draw"
        : status && status === "won"
        ? winner && winner === "You"
          ? "You won"
          : "You lost"
        : status && status === "ongoing"
        ? isMyTurn === true
          ? createdAt === lastUpdated
            ? "Make the first move. It's your turn to play"
            : `${opponent_name} just made their move! It's your turn to play now.`
          : createdAt === lastUpdated
          ? `${opponent_name} is yet to play the first move`
          : "You've made your move! Waiting for them"
        : null}
    </span>
  );
};

export default GameStatus;
