const express = require("express");
const {
  allBrands,
  createBrand,
  brandById,
  updateBrand,
  deleteBrand,
} = require("../controllers/brand.controllers");
const router = express.Router();

router.get("/", allBrands);
router.get("/:id", brandById);
router.post("/brand", createBrand);
router.put("/:id", updateBrand);
router.delete("/:id", deleteBrand);

module.exports = router;
