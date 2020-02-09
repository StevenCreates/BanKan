const express = require("express");
const { ObjectID } = require("mongodb");
const Post = require("../../models/Posts");

const router = new express.Router();

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
