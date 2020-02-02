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
  //   comments: {
  //     type: [
  //       {
  //         commenterId: String,
  //         text: String,
  //         timestamp: Number
  //       }
  //     ],
  //     required: true
  //   },
  //   likers: {
  //     type: [String],
  //     required: true
  //   },
  //   likesCount: {
  //     type: Number,
  //     required: true
  //   },
  body: {
    type: String
  },
  user: {
    type: String
  }
});

module.exports = mongoose.model("Posts", PostSchema);
