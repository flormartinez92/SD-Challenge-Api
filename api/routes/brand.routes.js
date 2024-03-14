const express = require("express");
const { allBrands } = require("../controllers/brand.controllers");
const router = express.Router();

router.get("/", allBrands);

router.get("/:id", (req, res) => {
  res.send("product by id");
});

module.exports = router;
