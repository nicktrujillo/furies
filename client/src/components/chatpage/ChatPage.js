import React, { Component, useEffect } from "react";
import { Form, Icon, Input, Button, Row, Col } from "antd";
import io from "socket.io-client";
import { connect } from "react-redux";
import moment from "moment";
import { getChats, afterPostMessage } from "../../actions/chat";
import ChatCard from "./ChatCard";
import Dropzone from "react-dropzone";
import Axios from "axios";

const socket = io.connect("http://localhost:5000");

function ChatPage() {
  useEffect(() => {
    socket.on("Output Chat Message", () => {
      console.log("connected");
    });
  }, []);

  const sendMessage = () => {
    socket.emit("Input Chat Message", {
      chatMessage: "hello",
      receiver: "5f9741cd4f4ed319cb62e48d",
      sender: "5f9741cd4f4ed319cb62e48d",
      commonId: "5f9741cd4f4ed319cb62e48d5f9741cd4f4ed319cb62e48d",
    });
  };

  return (
    <div>
      <p>chatpage</p>
      <button onClick={sendMessage}>click me</button>
    </div>
  );
}

export default ChatPage;

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

//     let chatMessage = this.state.chatMessage;
//     let userId = this.props.auth.user._id;
//     let userName = this.props.auth.user.name;
//     let userImage = this.props.auth.user.avatar;
//     let nowTime = moment();
//     let type = "Text";

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
