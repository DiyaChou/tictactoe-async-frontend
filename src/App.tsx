import { Route, Routes } from "react-router-dom";
import "./App.css";
import Entry from "./pages/entry/Entry.page";
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
        <Route path="/new_game" element={<NewGame />} />
        <Route path="/game" element={<NewGame />} />
      </Routes>
    </div>
  );
};

export default App;
