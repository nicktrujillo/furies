mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const chatSchema = mongoose.Schema(
//   {
//     message: {
//       type: String,
//     },
//     sender: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//     type: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

const chatSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    read: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
