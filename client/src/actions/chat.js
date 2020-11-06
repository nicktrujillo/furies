import axios from "axios";
import api from "../utils/api";
import { GET_CHATS, AFTER_POST_MESSAGE } from "./types";
// import { CHAT_SERVER } from "../components/chatpage/Config";

// export function getChats() {
//   const request = axios
//     .get("/api/chat/getChats")
//     .then((response) => response.data)
//     .catch((err) => console.log(err));

//   return {
//     type: GET_CHATS,
//     payload: request,
//   };
// }

// Get chats
export const getChats = () => async (dispatch) => {
  try {
    const res = await api.get("/api/chat");

    dispatch({
      type: GET_CHATS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export function afterPostMessage(data) {
  return {
    type: AFTER_POST_MESSAGE,
    payload: data,
  };
}
