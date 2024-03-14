const { allBrands } = require("../services/brand.services");

exports.allBrands = async (req, res) => {
  try {
    const brands = await allBrands();
    res.status(200).send(brands);
  } catch (error) {
    switch (error.message) {
      case "Brands not found":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};
