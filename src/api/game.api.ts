import axios from "axios";
import { SubmitParams } from "../interface";
const baseUrl = "http://localhost:3001";
const gameUrl = baseUrl + "/game";

const sendGameInviteAPICall = (email: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        gameUrl,
        { email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};

const fetchAllGamesAPICall = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(gameUrl, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        console.log(result.data);
        resolve(result.data);
      })
      .catch((error) => reject(error));
  });
};

const fetchSingleGameAPICall = (gameId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(gameUrl + "/" + gameId, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};

const submitAPICall = (params: SubmitParams) => {
  return new Promise((resolve, reject) => {
    axios
      .put(
        gameUrl + "/" + params.gameId,
        { board_pos: params.board_pos },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};

export {
  sendGameInviteAPICall,
  fetchAllGamesAPICall,
  fetchSingleGameAPICall,
  submitAPICall,
};
