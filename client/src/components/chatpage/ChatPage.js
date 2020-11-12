import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { connect } from "react-redux";
import { getChats, afterPostMessage } from "../../actions/chat";
import { getProfileById } from "../../actions/profile";
import styles from "./ChatPage.module.css";
import Moment from "react-moment";
import LeftSidebar from "../layout/LeftSidebar";
import chat from "../../reducers/chat";
import ChatListComponent from "./ChatListComponent";
import Spinner from "../layout/Spinner";

const socket = io.connect("http://localhost:5000");

function ChatPage({
  getChats,
  getProfileById,
  chats,
  auth,
  profile: { profile },
}) {
  const { id } = useParams();
  let messagesEndRef = useRef(null);

  useEffect(() => {
    getProfileById(id);
    console.log(profile);
  }, [getProfileById, id]);

  useEffect(() => {
    socket.on("Output Chat Message", () => {
      getChats(id);
    });
  }, []);

  useEffect(() => {
    getChats(id);
  }, [getChats, id]);

  useEffect(() => {
    if (chats.length > 1 && profile !== null) {
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

  const enterPressed = (e) => {
    let code = e.keyCode || e.which;
    if (code === 13) {
      sendMessage();
    }
  };

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
          {profile === null ? (
            <Spinner />
          ) : (
            <div className={styles.directChat}>
              <div className={styles.directChatHeading}>
                <div className={styles.nameAndAvi}>
                  <img
                    className={styles.chatAvatar}
                    src={profile.user.avatar}
                  ></img>
                  <p>{profile.user.name}</p>
                </div>
              </div>
              <div className={styles.directChatBody}>
                {chats
                  .slice(0)
                  .reverse()
                  .map((msg) => (
                    <>
                      {msg.sender._id === sender ? (
                        <div className={styles.messageFlexSent}>
                          <div className={styles.messageContainerSent}>
                            <div className={styles.bubbleSent}>
                              {msg.message}
                            </div>
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
                            <div className={styles.bubbleReceived}>
                              {msg.message}
                            </div>
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
              </div>
              <div className={styles.messageForm}>
                <input
                  className={styles.messageInput}
                  name='text'
                  placeholder='start a new message'
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  autoComplete='off'
                  onKeyPress={enterPressed}
                />
                <button className={styles.submitButton} onClick={sendMessage}>
                  <i class='fa fa-paper-plane' aria-hidden='true'></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
    chats: state.chats.chats,
    profile: state.profile,
  };
};

export default connect(mapStateToProps, { getChats, getProfileById })(ChatPage);

// export class ChatPage extends Component {
//   state = {
//     chatMessage: "",
//   };

//   componentDidMount() {
//     let server = "http://localhost:5000";

//     this.props.dispatch(getChats());

//     this.socket = io(server);

//     this.socket.on("Output Chat Message", (messageFromBackEnd) => {
//       console.log(messageFromBackEnd);
//       this.props.dispatch(afterPostMessage(messageFromBackEnd));
//     });
//   }

//   componentDidUpdate() {
//     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
//   }

//   hanleSearchChange = (e) => {
//     this.setState({
//       chatMessage: e.target.value,
//     });
//   };

//   renderCards = () =>
//     this.props.chats.chats &&
//     this.props.chats.chats.map((chat) => <ChatCard key={chat._id} {...chat} />);

//   onDrop = (files) => {
//     console.log(files);

//     if (this.props.user.userData && !this.props.user.userData.isAuth) {
//       return alert("Please Log in first");
//     }

//     let formData = new FormData();

//     const config = {
//       header: { "content-type": "multipart/form-data" },
//     };

//     formData.append("file", files[0]);

//     Axios.post("api/chat/uploadfiles", formData, config).then((response) => {
//       if (response.data.success) {
//         let chatMessage = response.data.url;
//         let userId = this.props.user.userData._id;
//         let userName = this.props.user.userData.name;
//         let userImage = this.props.user.userData.image;
//         let nowTime = moment();
//         let type = "VideoOrImage";

//         this.socket.emit("Input Chat Message", {
//           chatMessage,
//           userId,
//           userName,
//           userImage,
//           nowTime,
//           type,
//         });
//       }
//     });
//   };

//   submitChatMessage = (e) => {
//     e.preventDefault();

//     // if (this.props.user.userData && !this.props.user.userData.isAuth) {
//     //   return alert("Please Log in first");
//     // }

// let chatMessage = this.state.chatMessage;
// let userId = this.props.auth.user._id;
// let userName = this.props.auth.user.name;
// let userImage = this.props.auth.user.avatar;
// let nowTime = moment();
// let type = "Text";

//     this.socket.emit("Input Chat Message", {
//       chatMessage,
//       userId,
//       userName,
//       userImage,
//       nowTime,
//       type,
//     });
//     this.setState({ chatMessage: "" });
//     console.log(chatMessage);
//     console.log(userId);
//     console.log(userName);
//   };

//   render() {
//     return (
//       <>
//         <div>
//           <p style={{ fontSize: "2rem", textAlign: "center" }}>Chat</p>
//         </div>

//         <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//           <div
//             className='infinite-container'
//             style={{ height: "500px", overflowY: "scroll" }}
//           >
//             {this.props.chats && this.renderCards()}
//             <div
//               ref={(el) => {
//                 this.messagesEnd = el;
//               }}
//               style={{ float: "left", clear: "both" }}
//             />
//           </div>

//           <Row>
//             <Form layout='inline' onSubmit={this.submitChatMessage}>
//               <Col span={18}>
//                 <Input
//                   id='message'
//                   prefix={
//                     <Icon type='message' style={{ color: "rgba(0,0,0,.25)" }} />
//                   }
//                   placeholder="Let's start talking"
//                   type='text'
//                   value={this.state.chatMessage}
//                   onChange={this.hanleSearchChange}
//                 />
//               </Col>
//               <Col span={2}>
//                 <Dropzone onDrop={this.onDrop}>
//                   {({ getRootProps, getInputProps }) => (
//                     <section>
//                       <div {...getRootProps()}>
//                         <input {...getInputProps()} />
//                         <Button>
//                           <Icon type='upload' />
//                         </Button>
//                       </div>
//                     </section>
//                   )}
//                 </Dropzone>
//               </Col>

//               <Col span={4}>
//                 <Button
//                   type='primary'
//                   style={{ width: "100%" }}
//                   onClick={this.submitChatMessage}
//                   htmlType='submit'
//                 >
//                   <Icon type='enter' />
//                 </Button>
//               </Col>
//             </Form>
//           </Row>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//     chats: state.chat,
//   };
// };

// export default connect(mapStateToProps)(ChatPage);
