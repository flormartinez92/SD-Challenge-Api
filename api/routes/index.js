const express = require("express");
const router = express.Router();
const productRoutes = require("./product.routes");
const userRoutes = require("./user.routes");
const brandRoutes = require("./brand.routes");

router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/brands", brandRoutes);

module.exports = router;
