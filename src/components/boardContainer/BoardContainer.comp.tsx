import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./boardContainer.style.css";
import { isClickValid } from "../../utils/somefn";
interface Params {
  board: string[];
  message: string;
  amIX: string;
  game_status: string;
  isMyTurn: boolean;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}
const BoardContainer = (params: Params) => {
  const { board, message, amIX, selected, setSelected, game_status, isMyTurn } =
    params;

  const handleBoardComponentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    const result = isClickValid({ status: game_status, isMyTurn });
    if (result) {
      if (selected) {
        if (selected === i) setSelected(null);
        else setSelected(i);
      } else setSelected(i);
    }
  };
  return (
    <div className="board_wrapper">
      <div className="board__message_container">{message}</div>
      <div className="board_container">
        {board.map((item, i) => {
          return (
            <div className="board_piece" key={i}>
              {item && item === "x" ? (
                <FontAwesomeIcon icon={faClose} />
              ) : item && item === "o" ? (
                <FontAwesomeIcon icon={faCircle} />
              ) : (
                <div
                  className="board_piece_icon"
                  onClick={(e) => handleBoardComponentClick(e, i)}
                >
                  {selected === i ? (
                    amIX === "yes" ? (
                      <FontAwesomeIcon icon={faClose} />
                    ) : (
                      <FontAwesomeIcon icon={faCircle} />
                    )
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardContainer;
