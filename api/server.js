require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./db/index.js");
const models = require("./models");
const {
  seedAdminUser,
  seedBrands,
  seedProducts,
} = require("./utils/seeder.js");

const port = process.env.PORT || 5432;
const routes = require("./routes");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin:
      `${process.env.ECOMMERCE_WINE_CLIENT_HOST}` || "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    credentials: true,
  })
);

app.use("/api", routes);

db.sync({ force: false })
  .then(async () => {
    console.log("Database connected");
    await seedAdminUser();
    await seedBrands();
    await seedProducts();
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.log(err));
