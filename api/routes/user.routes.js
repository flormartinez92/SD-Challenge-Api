const express = require("express");
const {
  createProduct,
  createBrand,
} = require("../controllers/user.controllers");
const router = express.Router();

//* If user is admin

router.post("/brand", createBrand);
router.post("/product", createProduct);

router.put("/product/:id", (req, res) => {
  res.send("update product");
});

router.delete("/product/:id", (req, res) => {
  res.send("delete product");
});

module.exports = router;
