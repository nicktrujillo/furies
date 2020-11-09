import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { connect } from "react-redux";
import { getChats, getChatList } from "../../actions/chat";
import styles from "./ChatPage.module.css";
import Moment from "react-moment";
import LeftSidebar from "../layout/LeftSidebar";
import chat from "../../reducers/chat";
import { Link } from "react-router-dom";

const socket = io.connect("http://localhost:5000");

function ChatHome({ getChatList, chatList, auth }) {
  useEffect(() => {
    getChatList();
  }, [getChatList]);

  console.log(chatList);

  return (
    <>
      {chatList.map((chat) => (
        <Link to={`/messages/${chat.sender._id}`}>
          <div key={chat._id} className={styles.messagePreviewContainer}>
            <img className={styles.chatListAvi} src={chat.sender.avatar}></img>
            <div className={styles.nameAndPreview}>
              <h4>{chat.sender.name}</h4>
              <p className={styles.messagePreview}>{chat.message}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
    chatList: state.chats.chatList,
  };
};

export default connect(mapStateToProps, { getChatList })(ChatHome);
