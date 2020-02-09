// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const users = require("./routes/api/users");
// const posts = require("./routes/api/posts");
// const profile = require("./routes/api/profile");
// const comments = require("./routes/api/comments");
// const app = express();
// const path = require("path");
// var cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();

// app.use(cors());

// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// // DB Config
// const db = require("./config/keys").mongoURI;
// // Connect to MongoDB
// mongoose
//   .connect(db, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   })
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// // Passport middleware
// app.use(passport.initialize()); // Passport config
// require("./config/passport")(passport); // Routes
// app.use("/api/users", users);
// app.use("/api/posts", posts);
// app.use("/api/profile", profile);
// app.use("/api/comments", comments);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// const port = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there
// app.listen(port, () => console.log(`Server up and running on port ${port} !`));

const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
