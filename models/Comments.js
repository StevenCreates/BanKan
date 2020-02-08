const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  id: {
    type: String
  },
  comment: {
    type: String
  },
  userid: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
