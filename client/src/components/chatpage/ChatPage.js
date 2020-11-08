import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { connect } from "react-redux";
import { getChats, afterPostMessage } from "../../actions/chat";
import styles from "./ChatPage.module.css";
import Moment from "react-moment";
import LeftSidebar from "../layout/LeftSidebar";

const socket = io.connect("http://localhost:5000");

function ChatPage({ getChats, chats, auth }) {
  const { id } = useParams();
  const endMessage = useRef();

  useEffect(() => {
    socket.on("Output Chat Message", () => {
      getChats(id);
    });
  }, []);

  useEffect(() => {
    getChats(id);
  }, [getChats]);

  const [chatMessage, setChatMessage] = useState("");

  let message = chatMessage;
  let sender = auth.user._id;
  let recipient = id;

  const sendMessage = () => {
    socket.emit("Input Chat Message", {
      message,
      sender,
      recipient,
    });
    setChatMessage("");
    if (chats.length > 0) {
      endMessage.current.scrollIntoView();
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
            <h1 className={styles.chatListHeading}>All Chats</h1>
            <ul>
              <li>chat list</li>
            </ul>
          </div>
          <div className={styles.directChat}>
            <div className={styles.directChatGrid}>
              <div className={styles.directChatHeading}>
                {chats[0] ? (
                  <h1>{chats[0].recipient.name}</h1>
                ) : (
                  <h1>Start a New Conversation</h1>
                )}
              </div>
              <div className={styles.directChatBody}>
                {chats.map((msg) => (
                  <div>
                    <p ref={endMessage}>{msg.message}</p>
                    <p>{msg.sender.name}</p>
                    <img
                      className={styles.chatAvatar}
                      src={msg.sender.avatar}
                    />
                    <Moment format='MM/DD/YYYY, h:mm A'>{msg.createdAt}</Moment>
                  </div>
                ))}
              </div>
              <div className={styles.messageForm}>
                <input
                  className={styles.messageInput}
                  name='text'
                  placeholder='start a new message'
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  autoComplete='off'
                />
                <button className={styles.submitButton} onClick={sendMessage}>
                  send
                </button>
              </div>
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
    chats: state.chats.chats,
  };
};

export default connect(mapStateToProps, { getChats })(ChatPage);

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
