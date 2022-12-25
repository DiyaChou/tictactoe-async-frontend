interface Params {
  status: string;
  isMyTurn: boolean;
  opponent_name: string;
}

interface Params2 {
  status: string;
  isMyTurn: boolean;
  selectedComponent: number | null;
}
interface Params3 {
  status: string;
  isMyTurn: boolean;
}

export const board_message_fn = ({
  status,
  isMyTurn,
  opponent_name,
}: Params) => {
  if (status === "won" || status === "drawn") {
    return "start another game";
  } else if (status === "ongoing") {
    if (isMyTurn) return "submit";
    else return `waiting for ${opponent_name}`;
  } else throw new Error("invalid board_message_fn parameters");
};

export const shouldButtonBeDisabled = ({
  status,
  isMyTurn,
  selectedComponent,
}: Params2) => {
  if (status === "ongoing") {
    if (isMyTurn) {
      if (selectedComponent !== null) return false;
    }
  } else if (status === "drawn" || "won") return false;

  return true;
};

export const isClickValid = ({ status, isMyTurn }: Params3) => {
  if (status === "ongoing") {
    if (isMyTurn) return true;
  }
  return false;
};
