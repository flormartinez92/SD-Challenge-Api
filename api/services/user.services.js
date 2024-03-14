const { Product, Brand } = require("../models");

async function createBrand(req) {
  const newBrand = await Brand.create(req.body);
  if (!newBrand) throw new Error("Brand not created");
  return newBrand;
}

async function createProduct(brandId, productData) {
  const brand = await Brand.findByPk(brandId);
  if (!brand) throw new Error("Brand not found");

  const newProduct = await Product.create({ ...productData, brandId });
  if (!newProduct) throw new Error("Product not created");
  return newProduct;
}

module.exports = { createBrand, createProduct };
