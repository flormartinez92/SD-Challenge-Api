const brandData = require("../db/fakeBrandData");
const productData = require("../db/fakeProductData");
const { User, Brand, Product } = require("../models");

async function seedAdminUser() {
  try {
    const existingAdmin = await User.findOne({ where: { isAdmin: true } });
    if (!existingAdmin) {
      await User.create({
        name: "Administrador",
        lastname: "Administrador",
        username: `${process.env.ADMIN_USER}`,
        password: `${process.env.ADMIN_USER_PASSWORD}`,
        isAdmin: true,
      });
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Error creating admin user", error);
  }
}

async function seedBrands() {
  try {
    const existingBrands = await Brand.findAll();
    if (existingBrands.length) {
      console.log("Brands already seeded");
      return;
    }
    await Brand.bulkCreate(brandData);
    console.log("Brands seeded");
  } catch (error) {
    console.error("Error seeding brands", error);
  }
}

async function seedProducts() {
  try {
    const existingProducts = await Product.findAll();
    if (existingProducts.length) {
      console.log("Products already seeded");
      return;
    }
    await Product.bulkCreate(productData);
    console.log("Products seeded");
  } catch (error) {
    console.error("Error seeding products", error);
  }
}

module.exports = { seedAdminUser, seedBrands, seedProducts };
