const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
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
  }
});

module.exports = mongoose.model("Comments", CommentSchema);
