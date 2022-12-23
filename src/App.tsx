import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/privateRoute/PrivateRoute.comp";
import Entry from "./pages/entry/Entry.page";
import Game from "./pages/game/Game.page";
import Home from "./pages/home/Home.page";
import Login from "./pages/login/Login.page";
import NewGame from "./pages/new game/NewGame.page";
import Register from "./pages/register/Register.page";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/newGame"
          element={
            <PrivateRoute>
              <NewGame />
            </PrivateRoute>
          }
        />
        <Route
          path="/game/:gameId"
          element={
            <PrivateRoute>
              <Game />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
