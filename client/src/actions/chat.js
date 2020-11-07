import axios from "axios";
import api from "../utils/api";
import { GET_CHATS, AFTER_POST_MESSAGE } from "./types";

// Get chats by ID
export const getChats = (recipientId) => async (dispatch) => {
  try {
    const res = await api.get(`/chat/${recipientId}`);

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
