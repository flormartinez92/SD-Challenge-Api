const { Brand } = require("../models");

async function allBrands() {
  const brands = await Brand.findAll();
  if (!brands) throw new Error("Brands not found");
  return brands;
}

async function brandById(id) {
  const brand = await Brand.findByPk(id);
  if (!brand) throw new Error("Brand not found");
  return brand;
}

async function createBrand(req) {
  const { name } = req.body;

  const existingBrand = await Brand.findOne({ where: { name } });
  if (existingBrand) throw new Error("Brand already exists");

  const newBrand = await Brand.create(req.body);
  if (!newBrand) throw new Error("Brand not created");
  return newBrand;
}

async function updateBrand(id, brandData) {
  const brand = await Brand.findByPk(id);
  if (!brand) throw new Error("Brand not found");
  const updatedBrand = await brand.update(brandData);
  return updatedBrand;
}

async function deleteBrand(id) {
  const brand = await Brand.findByPk(id);
  if (!brand) throw new Error("Brand not found");
  await brand.destroy();
}

module.exports = {
  allBrands,
  createBrand,
  brandById,
  updateBrand,
  deleteBrand,
};
