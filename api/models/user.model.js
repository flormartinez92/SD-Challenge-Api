const { DataTypes, Model } = require("sequelize");
const db = require("../db/index.js");

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
