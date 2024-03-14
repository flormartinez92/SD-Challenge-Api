const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DB_HOST || "challengebd", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
