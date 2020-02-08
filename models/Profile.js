const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  about: {
    type: String
  },
  avatar: {
    type: String
  },
  sociallinks: {
    type: String
  }
});

module.exports = mongoose.model("Posts", PostSchema);
