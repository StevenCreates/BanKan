const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  about: {
    type: String
  },
  id: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = mongoose.model("Profile", ProfileSchema);
