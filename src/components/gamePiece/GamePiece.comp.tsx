import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GamePiece: React.FC<{ amIX: string }> = ({ amIX }) => {
  return amIX === "yes" ? (
    <FontAwesomeIcon icon={faClose} />
  ) : (
    <FontAwesomeIcon icon={faCircle} />
  );
};

export default GamePiece;
