const { DataTypes, Model } = require("sequelize");
const db = require("../db/index.js");

class Brand extends Model {}

Brand.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "brand" }
);

module.exports = Brand;
