const express = require("express");
const { ObjectID } = require("mongodb");
const Profile = require("../../models/Profile");

const router = new express.Router();

router.post("/findme/", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const profile = await Profile.find({ id }).sort({ timestamp: -1 });
  res.status(200).json(profile);
});

router.post("/newprofile", async (req, res) => {
  const newProfile = new Profile({
    about: req.body.about,
    id: req.body.id,
    name: req.body.name,
    timestamp: new Date().getTime()
  });
  try {
    const post = await newProfile.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
