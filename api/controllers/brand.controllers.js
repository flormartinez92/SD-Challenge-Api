const {
  allBrands,
  createBrand,
  brandById,
  updateBrand,
  deleteBrand,
} = require("../services/brand.services");

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

exports.brandById = async (req, res) => {
  try {
    const brand = await brandById(req.params.id);
    res.status(200).send(brand);
  } catch (error) {
    switch (error.message) {
      case "Brand not found":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.createBrand = async (req, res) => {
  try {
    const brand = await createBrand(req);
    res.status(201).send(brand);
  } catch (error) {
    switch (error.message) {
      case "Brand already exists":
        res.status(409).send(error.message);
        break;
      case "Brand not created":
        res.status(400).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.updateBrand = async (req, res) => {
  const { id } = req.params;
  const brandData = req.body;
  try {
    const brand = await updateBrand(id, brandData);
    res.status(200).send(brand);
  } catch (error) {
    switch (error.message) {
      case "Brand not found":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteBrand(id);
    res.status(204).send();
  } catch (error) {
    switch (error.message) {
      case "Brand not found":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};
