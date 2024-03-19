const { Product, Brand } = require("../models");

async function allProducts() {
  const products = await Product.findAll({ include: Brand });
  if (!products) throw new Error("Products not found");
  return products;
}

async function productById(id) {
  const product = await Product.findByPk(id, { include: Brand });
  if (!product) throw new Error("Product not found");
  return product;
}

async function createProduct(brandId, productData) {
  const { name } = productData;

  const existingProduct = await Product.findOne({ where: { name, brandId } });
  if (existingProduct) throw new Error("Product already exists");

  const brand = await Brand.findByPk(brandId);
  if (!brand) throw new Error("Brand not found");

  const newProduct = await Product.create({ ...productData, brandId });
  if (!newProduct) throw new Error("Product not created");
  return newProduct;
}

async function updateProduct(id, productData) {
  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found");
  const updatedProduct = await product.update(productData);
  return updatedProduct;
}

async function deleteProduct(id) {
  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found");
  await product.destroy();
}

module.exports = {
  allProducts,
  productById,
  createProduct,
  updateProduct,
  deleteProduct,
};
