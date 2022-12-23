import "./home.style.css";
import { useEffect } from "react";
import GameCard from "../../components/gameCard/GameCard.comp";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Game } from "../../interface";
import EmptyHome from "./EmptyHome.page";
import { getAllGames } from "./home.actions";
import AlertBox from "../../components/alertBox/AlertBox.comp";
import NewGameComponent from "../../components/newGameComp/NewGameComp";
import spinner from "../../assets/gif/spinner.gif";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, games } = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  return isLoading ? (
    <img src={spinner} alt="loading" />
  ) : (
    <div className="home">
      {error && <AlertBox text={error} variant="error" />}
      <div className="common__heading_container">
        <span className="common__heading">Your Games</span>
      </div>
      {games && games.length === 0 ? (
        <EmptyHome />
      ) : (
        <>
          {games.map((item: Game, i) => {
            console.log(item);
            return <GameCard key={i} gameInfo={item} />;
          })}
          <NewGameComponent />
        </>
      )}
    </div>
  );
};

export default Home;
