const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO_URI;

module.exports = {
  mongoURI: url,

  secretOrKey: "secret"
};
