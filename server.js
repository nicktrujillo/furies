const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Chat setup
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const Chat = require("./models/Chat");

app.use("/api/chat", require("./routes/api/chat"));

io.on("connection", (socket) => {
  socket.on("Input Chat Message", (msg) => {
    connectDB().then((db) => {
      try {
        let chat = new Chat({
          message: msg.message,
          sender: msg.sender,
          recipient: msg.recipient,
          // recipient: msg.receiverId,
        });
        chat.save((err, doc) => {
          console.log(doc);
          if (err) return res.json({ success: false, err });
          Chat.find({ _id: doc._id })
            .populate("sender")
            .exec((err, doc) => {
              return io.emit("Output Chat Message", doc);
            });
        });
      } catch (error) {
        console.error(error);
      }
    });
  });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server started on port ${PORT}`));
