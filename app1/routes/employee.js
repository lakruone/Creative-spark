const express = require("express");
const router = express.Router();
const User = require('../models/userQuery');

router.get("/", (req,res) => {
  res.send("still creating");
});

module.exports = router;
