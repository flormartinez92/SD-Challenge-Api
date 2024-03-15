const {
  allProducts,
  createProduct,
  productById,
  updateProduct,
  deleteProduct,
} = require("../services/product.services");

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

exports.productById = async (req, res) => {
  try {
    const product = await productById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    switch (error.message) {
      case "Product not found":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.createProduct = async (req, res) => {
  const { brandId, ...productData } = req.body;
  try {
    const product = await createProduct(brandId, productData);
    res.status(201).send(product);
  } catch (error) {
    switch (error.message) {
      case "Product already exists":
        res.status(409).send(error.message);
        break;
      case "Brand not found":
        res.status(404).send(error.message);
        break;
      case "Product not created":
        res.status(400).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const productData = req.body;
  try {
    const product = await updateProduct(id, productData);
    res.status(200).send(product);
  } catch (error) {
    switch (error.message) {
      case "Product not found":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    switch (error.message) {
      case "Product not found":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};
