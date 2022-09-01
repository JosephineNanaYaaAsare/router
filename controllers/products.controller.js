const getProducts = (req, res) => {
  res.status(200).send("Get all Product");
};

const createProduct = (req, res) => {
  res.status(201).send("Product has been created");
};

const updateProduct = (req, res) => {
  res.status(200).send("Product has been updated");
};

const deleteProduct = (req, res) => {
  res.status(200).send("Product hass been deleted");
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
