const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO_URL;

module.exports = {
  mongoURI: url,

  secretOrKey: "secret"
};
