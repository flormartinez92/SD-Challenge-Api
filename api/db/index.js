const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.DB_NAME || "challengebd",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "dpg-cnsug7v79t8c73a8g3c0-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
