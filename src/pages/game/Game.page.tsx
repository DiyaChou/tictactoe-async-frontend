import React, { useEffect, useState } from "react";
import "../../utils/commonFormPage.style.css";
import Header from "../../components/header/Header.comp";
import "./game.style.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSingleGame, startAnotherGame, submitTurn } from "./game.actions";
import { useNavigate, useParams } from "react-router-dom";
import spinner from "../../assets/gif/spinner.gif";
import GamePiece from "../../components/gamePiece/GamePiece.comp";
import BoardContainer from "../../components/boardContainer/BoardContainer.comp";
import BigButton from "../../components/bigButton/BigButton.comp";
import AlertBox from "../../components/alertBox/AlertBox.comp";
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
  const [submitClicked, setSubmitClicked] = useState(false);
  const { gameId } = useParams();
  const dispatch = useAppDispatch();

  const handleGameOnSubmit = () => {
    setSubmitClicked(true);
  };

  useEffect(() => {
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
        new_game_id && navigate(`/game/${new_game_id}`);
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
    navigate,
  ]);

  useEffect(() => {
    console.log(submitClicked);
  }, [submitClicked]);

  useEffect(() => {
    gameId && dispatch(getSingleGame(gameId));
  }, [dispatch, gameId]);
  useEffect(() => {}, [game]);

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
                disabled={shouldButtonBeDisabled({
                  status: game.status,
                  isMyTurn: game.isMyTurn,
                  selectedComponent,
                })}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
