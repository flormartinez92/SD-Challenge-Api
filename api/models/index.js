const Product = require("./product.model.js");
const User = require("./user.model.js");
const Brand = require("./brand.model.js");

Product.belongsTo(Brand);

module.exports = { Product, User, Brand };
