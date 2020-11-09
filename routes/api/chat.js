const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");

const Chat = require("../../models/Chat");

// @route    GET api/chat
// @desc     Get all current user's chats
// @access   Private
router.get("/", auth, async ({ user: { id } }, res) => {
  await Chat.find({
    recipient: { $in: [id] },
  })
    .populate("sender")
    .populate("recipient")
    .sort({ updatedAt: -1 })
    // .limit(5)
    .exec((err, chats) => {
      console.log(err);
      if (err) return res.status(400).send(err);
      res.status(200).send(chats);
    });
});

// @route    GET api/chat/:user_id
// @desc     Get chats by commonId
// @access   Private
router.get(
  "/:user_id",
  checkObjectId("user_id"),
  auth,
  async ({ params: { user_id }, user: { id } }, res) => {
    await Chat.find({
      recipient: { $in: [user_id, id] },
      sender: { $in: [id, user_id] },
    })
      .populate("sender")
      .populate("recipient")
      .sort({ updatedAt: -1 })
      // .limit(5)
      .exec((err, chats) => {
        console.log(err);
        if (err) return res.status(400).send(err);
        res.status(200).send(chats);
      });
  }
);

module.exports = router;
