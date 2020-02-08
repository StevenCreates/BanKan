const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    requuired: true
  },
  link: {
    type: String
  },
  body: {
    type: String
  },
  user: {
    type: String
  },
  user_id: {
    type: String
  }
});

module.exports = mongoose.model("Posts", PostSchema);
