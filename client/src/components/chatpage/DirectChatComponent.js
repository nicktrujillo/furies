import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { connect } from "react-redux";
import { getChats, afterPostMessage } from "../../actions/chat";
import styles from "./ChatPage.module.css";
import Moment from "react-moment";
import LeftSidebar from "../layout/LeftSidebar";
import chat from "../../reducers/chat";
import ChatHome from "./ChatHome";

const socket = io.connect("http://localhost:5000");

function ChatPage({ getChats, chats, auth }) {
  const { id } = useParams();
  let messagesEndRef = useRef(null);

  // const findName = () => {
  //   chats.forEach((chat) => {
  //     if (chat.recipient.name !== auth.user.name) {
  //       return chat.recipient.name;
  //     }
  //   });
  // };

  useEffect(() => {
    socket.on("Output Chat Message", () => {
      getChats(id);
    });
  }, []);

  useEffect(() => {
    getChats(id);
  }, [getChats]);

  useEffect(() => {
    if (chats.length > 1) {
      scrollToBottom();
    }
  }, [chats]);

  const [chatMessage, setChatMessage] = useState("");

  let message = chatMessage;
  let sender = auth.user._id;
  let recipient = id;

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      block: "end",
      // behavior: "smooth",
    });
  };

  const sendMessage = () => {
    socket.emit("Input Chat Message", {
      message,
      sender,
      recipient,
    });
    setChatMessage("");
  };

  return (
    <>
      {chats
        .slice(0)
        .reverse()
        .map((msg) => (
          <>
            {msg.sender._id === sender ? (
              <div className={styles.messageFlexSent}>
                <div className={styles.messageContainerSent}>
                  <div className={styles.bubbleSent}>{msg.message}</div>
                  <Moment
                    className={styles.messageDate}
                    format='MM/DD/YYYY, h:mm A'
                  >
                    {msg.createdAt}
                  </Moment>
                </div>
              </div>
            ) : (
              <div className={styles.messageFlexReceived}>
                <div className={styles.messageContainerReceived}>
                  <div className={styles.bubbleReceived}>{msg.message}</div>
                  <Moment
                    className={styles.messageDate}
                    format='MM/DD/YYYY, h:mm A'
                  >
                    {msg.createdAt}
                  </Moment>
                </div>
              </div>
            )}
          </>
        ))}
      <div ref={messagesEndRef} />
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
    chats: state.chats.chats,
  };
};

export default connect(mapStateToProps, { getChats })(ChatPage);
