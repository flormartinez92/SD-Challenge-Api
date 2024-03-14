require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./db/index.js");
const models = require("./models");

const port = process.env.PORT || 8080;
const routes = require("./routes");

app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.log(err));
