const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

//REQUIRING ROUTES
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const comments = require("./routes/api/comments");

//PORT
const PORT = process.env.PORT || 3001;

// DEFINING MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVE UP TO HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// CONNECTING TO MONGO // AND REQUIRING KEYS
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//USING ROUTES
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/comments", comments);

// PASSPORT
app.use(passport.initialize());
require("./config/passport")(passport);

//SENDING DATA TO INDEX.HTML
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// START API SERVER
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
