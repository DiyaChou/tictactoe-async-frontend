import React, { useEffect, useState } from "react";
import "../../utils/commonFormPage.style.css";
import "./game.style.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSingleGame, startAnotherGame, submitTurn } from "./game.actions";
import { useNavigate, useParams } from "react-router-dom";
import spinner from "../../assets/gif/spinner.gif";
import {
  Header,
  GamePiece,
  BoardContainer,
  BigButton,
  AlertBox,
} from "../../components";
import { resetGame } from "./game.slice";
import { submitTurnReset } from "./submitTurn.slice";
import { shouldButtonBeDisabled } from "../../utils/somefn";

const Game = () => {
  const { isLoading, status, game, error, startAnotherGameError, new_game_id } =
    useAppSelector((state) => state.game);
  const submitState = useAppSelector((state) => state.submit);
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState<number | null>(
    null
  );
  const [buttonState, setButtonState] = useState(false);
  const [newGame, setNewGame] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const { gameId } = useParams();
  const dispatch = useAppDispatch();

  const handleGameOnSubmit = () => {
    setSubmitClicked(true);
  };

  useEffect(() => {
    game.isMyTurn !== undefined &&
      setButtonState(
        shouldButtonBeDisabled({
          status: game.status,
          isMyTurn: game.isMyTurn,
          selectedComponent,
        })
      );
    if (submitClicked) {
      if (game.status === "ongoing") {
        gameId &&
          selectedComponent !== null &&
          dispatch(submitTurn({ board_pos: selectedComponent, gameId }));
        setSelectedComponent(null);
        setSubmitClicked(false);
        return;
      }
      if (game.status === "won" || "drawn") {
        dispatch(startAnotherGame(game.opponent.email));
        setNewGame(true);
        console.log("new_game_id", new_game_id);
        setSubmitClicked(false);
        return;
      }
    }
  }, [
    submitClicked,
    dispatch,
    gameId,
    selectedComponent,
    game.opponent.email,
    game.status,
    new_game_id,
    game.isMyTurn,
    navigate,
  ]);

  useEffect(() => {
    if (newGame) {
      console.log("newGame", newGame);
      if (new_game_id) {
        console.log("newGame new_game_id", newGame);
        setNewGame(false);
        navigate(`/game/${new_game_id}`);
      }
    }
  }, [newGame, new_game_id, navigate]);

  useEffect(() => {
    gameId && dispatch(getSingleGame(gameId));
  }, [gameId, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetGame());
      dispatch(submitTurnReset());
    };
  }, [dispatch]);

  return (
    <div className="form_page game_page">
      {isLoading || submitState.isLoading ? (
        <img src={spinner} alt="loading" />
      ) : (
        <>
          <div className="game__top_container">
            <div className="backarrow__container">
              <Header />
            </div>
            <div className="heading_container">
              {game.opponent.name && (
                <span className="heading2 game_heading2">
                  Game with{" "}
                  {`${
                    game.opponent.name.charAt(0).toUpperCase() +
                    game.opponent.name.slice(1)
                  }`}
                </span>
              )}
              <span className="heading">your piece</span>
              <div className="game__game_piece_container">
                {game.amIX && <GamePiece amIX={game.amIX} />}
              </div>
            </div>
            {game.board &&
              game.message &&
              game.amIX &&
              game.isMyTurn !== undefined && (
                <BoardContainer
                  board={game.board}
                  message={game.message}
                  amIX={game.amIX}
                  selected={selectedComponent}
                  setSelected={setSelectedComponent}
                  game_status={game.status}
                  isMyTurn={game.isMyTurn}
                />
              )}
          </div>
          <div className="button_container">
            {startAnotherGameError && (
              <AlertBox text={startAnotherGameError} variant="error" />
            )}
            {error && <AlertBox text={error} variant="error" />}
            {submitState.error && (
              <AlertBox text={submitState.error} variant="error" />
            )}
            {game.button_message && game.isMyTurn !== undefined && (
              <BigButton
                text={game.button_message}
                variant="yellow"
                handleOnClick={handleGameOnSubmit}
                disabled={buttonState}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
