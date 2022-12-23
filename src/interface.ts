export interface UserRegisterData {
  email: string;
  password: string;
  username: string;
  name: string;
}

export interface UserLoginData {
  username: string;
  password: string;
}

export interface Game {
  game_id: string;
  opponent_name: string;
  status: string;
  isMyTurn: boolean | undefined;
  lastUpdated: string;
  createdAt: string;
  winner?: string | null;
}

export interface SubmitParams {
  gameId: string;
  board_pos: number;
}
