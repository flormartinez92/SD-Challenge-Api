const { Brand } = require("../models");

async function allBrands() {
  const brands = await Brand.findAll();
  if (!brands) throw new Error("Brands not found");
  return brands;
}

module.exports = { allBrands };
