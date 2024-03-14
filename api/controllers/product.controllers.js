const { allProducts } = require("../services/product.services");

exports.allProducts = async (req, res) => {
  try {
    const products = await allProducts();
    res.status(200).send(products);
  } catch (error) {
    switch (error.message) {
      case "Products not found":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};
