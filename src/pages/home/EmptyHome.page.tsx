import { useNavigate } from "react-router-dom";
import BigButton from "../../components/bigButton/BigButton.comp";

const EmptyHome = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyHome">
      <span className="empty_home__heading">No games found</span>
      <div className="button_container">
        <BigButton
          text="Start a new game"
          variant="yellow"
          handleOnClick={() => navigate("/newGame")}
        />
      </div>
    </div>
  );
};

export default EmptyHome;
