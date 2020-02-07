const express = require("express");
const { ObjectID } = require("mongodb");
const Post = require("../../models/Posts");

const router = new express.Router();

// router.get("/oldpost", async (req, res) => {
//   const posts = await Post.find().sort({ timestamp: -1 });
//   res.status(200).json(posts);
// });

// router.post("/findme/", async (req, res) => {
//   // const { id } = req.params;
//   // const query = req.params.query;
//   const posts = await Post.find({ id: "5e3393491e1004801d8f500f" });
//   res.status(200).json(posts);
// });

router.post("/newprofile", async (req, res) => {
  const newProfile = new Profile({
    about: req.body.about,
    avatar: req.body.avatar,
    social: req.body.social
  });
  try {
    const post = await newProfile.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
