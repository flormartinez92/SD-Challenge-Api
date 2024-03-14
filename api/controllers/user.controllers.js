const { Product } = require("../models/index.js");
const { createProduct, createBrand } = require("../services/user.services.js");

exports.createBrand = async (req, res) => {
  try {
    const brand = await createBrand(req);
    res.status(201).send(brand);
  } catch (error) {
    switch (error.message) {
      case "Brand not created":
        res.status(400).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.createProduct = async (req, res) => {
  const { brandId, ...productData } = req.body;
  try {
    const product = await createProduct(brandId, productData);
    res.status(201).send(product);
  } catch (error) {
    switch (error.message) {
      case "Brand not found":
        res.status(404).send(error.message);
        break;
      case "Product not created":
        res.status(400).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};
