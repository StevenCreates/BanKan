const express = require("express");
const { ObjectID } = require("mongodb");
const Comment = require("../../models/Comments");

const router = new express.Router();

router.get("/oldcomment", async (req, res) => {
  const comments = await Comment.find().sort({ timestamp: -1 });
  res.status(200).json(comments);
});

router.post("/findme", async (req, res) => {
  const { id } = req.body;
  // const query = req.params.query;
  const comments = await Comment.find({ id });
  res.status(200).json(comments);
});

router.post("/newcomment", async (req, res) => {
  const newComment = new Comment({
    comment: req.body.comment,
    user_id: req.body.user,
    name: req.body.name,
    id: req.body.id,
    timestamp: new Date().getTime()
  });

  try {
    const post = await newComment.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (req.body.action === "like") {
    try {
      return Comment.findByIdAndUpdate(
        id,
        {
          $inc: { likesCount: 1 },
          $addToSet: { likers: req.body.id }
        },
        { new: true },
        (err, comment) => {
          if (err) return res.status(400).send(err);
          return res.send(comment);
        }
      );
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  if (req.body.action === "unlike") {
    try {
      return Comment.findByIdAndUpdate(
        id,
        {
          $inc: { likesCount: -1 },
          $pull: { likers: req.body.id }
        },
        { new: true },
        (err, comment) => {
          if (err) return res.status(400).send(err);
          return res.send(comment);
        }
      );
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  if (req.body.action === "addComment") {
    try {
      return Comment.findByIdAndUpdate(
        id,
        {
          $push: {
            comments: {
              commenterId: req.body.commenterId,
              text: req.body.text,
              timestamp: new Date().getTime()
            }
          }
        },
        { new: true },
        (err, comment) => {
          if (err) return res.status(400).send(err);
          return res.send(comment);
        }
      );
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  if (req.body.action === "deleteComment") {
    try {
      return Comment.findByIdAndUpdate(
        id,
        {
          $pull: {
            comments: {
              _id: req.body.commentId
            }
          }
        },
        { new: true },
        (err, comment) => {
          if (err) return res.status(400).send(err);
          return res.send(comment);
        }
      );
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  if (req.body.action === "editComment") {
    try {
      return Comment.findById(id, (err, comment) => {
        const { comments } = comment;
        const theComment = comments.find(comment =>
          comment._id.equals(req.body.commentId)
        );

        if (!theComment) return res.status(404).send("Comment not found");
        theComment.text = req.body.text;

        return comment.save(error => {
          if (error) return res.status(500).send(error);
          return res.status(200).send(comment);
        });
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  try {
    return Comment.findByIdAndUpdate(
      id,
      { $set: { text: req.body.text } },
      { new: true },
      (err, comment) => {
        if (err) return res.status(400).send(err);
        return res.send(comment);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    await comment.remove();
    return res.json({ success: true });
  } catch (err) {
    return res.status(404).send(err);
  }
});

module.exports = router;
