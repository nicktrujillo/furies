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
import ChatListComponent from "./ChatListComponent";

const socket = io.connect("http://localhost:5000");

function ChatHome({ getChatList, chatList, auth }) {
  useEffect(() => {
    getChatList();
  }, [getChatList]);

  console.log(chatList);

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.fixedColumnLeft}>
            <LeftSidebar />
          </div>
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chatList}>
            <h1 className={styles.chatListHeading}>Messages</h1>
            <div className={styles.chatListBody}>
              <ChatListComponent />
            </div>
          </div>
          <div className={styles.directChat}>
            <div className={styles.directChatHeading}>
              <h1 className={styles.newConversationTitle}>
                Start a New Conversation
              </h1>
            </div>
          </div>
        </div>
      </div>
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
