const { Product } = require("../models");

async function allProducts() {
  const products = await Product.findAll();
  if (!products) throw new Error("Products not found");
  return products;
}

module.exports = { allProducts };
