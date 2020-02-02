const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema({
  //   id: {
  //     type: String,
  //     required: true
  //   },
  title: {
    type: String,
    requuired: true
  },
  //   avatarColor: {
  //     type: Number,
  //     required: true
  //   },
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
    type: String,
    trim: true,
    required: true
  }
  //   timestamp: {
  //     type: Number,
  //     required: true
  //   }
});

module.exports = mongoose.model("Posts", PostSchema);
