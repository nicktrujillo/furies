const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");

const Chat = require("../../models/Chat");
console.log(Chat);
// @route    GET api/chat
// @desc     Get chats by commonId
// @access   Private
router.get(
  "/:user_id",
  checkObjectId("user_id"),
  auth,
  async ({ params: { user_id }, user: { id } }, res) => {
    await Chat.find({ recipient: { $in: [user_id] }, sender: { $in: [id] } })
      .populate("sender")
      .populate("recipient")
      .exec((err, chats) => {
        console.log(err);
        if (err) return res.status(400).send(err);
        res.status(200).send(chats);
      });
  }
);

module.exports = router;
