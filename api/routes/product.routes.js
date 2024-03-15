const express = require("express");
const {
  createProduct,
  allProducts,
  productById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", allProducts);
router.get("/:id", productById);
router.post("/product", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
