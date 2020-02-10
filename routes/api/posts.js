const express = require("express");
const { ObjectID } = require("mongodb");
const Post = require("../../models/Posts");

const router = new express.Router();

router.get("/oldpost", async (req, res) => {
  const posts = await Post.find().sort({ timestamp: -1 });
  res.status(200).json(posts);
});

router.post("/findme/", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const posts = await Post.find({ id }).sort({ timestamp: -1 });
  res.status(200).json(posts);
});

router.post("/newpost", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    user: req.body.user,
    link: req.body.link,
    user_id: req.body.id,
    id: req.body.id,
    profileid: req.body.profileid,
    body: req.body.body,
    timestamp: new Date().getTime()
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
