import { GET_CHATS, GET_CHATLIST, AFTER_POST_MESSAGE } from "../actions/types";

export default function (state = { chats: [], chatList: [] }, action) {
  switch (action.type) {
    case GET_CHATS:
      return { ...state, chats: action.payload };
    case GET_CHATLIST:
      return { ...state, chatList: action.payload };
    case AFTER_POST_MESSAGE:
      return { ...state, chats: state.chats.concat(action.payload) };
    default:
      return state;
  }
}
