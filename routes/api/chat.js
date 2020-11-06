const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");

const Chat = require("../../models/Chat");
console.log(Chat);
// @route    GET api/chat
// @desc     Get chats by commonId
// @access   Private
router.get("/", auth, async (req, res) => {
  await Chat.find()
    .populate("sender")
    .exec((err, chats) => {
      console.log(chats);
      if (err) return res.status(400).send(err);
      res.status(200).send(chats);
    });
});

module.exports = router;
