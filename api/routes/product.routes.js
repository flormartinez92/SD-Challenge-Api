const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("all products");
});

router.get("/:id", (req, res) => {
  res.send("product by id");
});

module.exports = router;
