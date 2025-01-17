import ProductModel from "../models/product.model.js";

const DeleteProducts = async (req, res) => {
  const { ProductId } = req.params;
  try {
    await ProductModel.findByIdAndDelete(ProductId);
    res.status(200).send("Product deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(404).send("Error deleting products");
  }
};

const GetAllProducts = async (req, res) => {
  const { userId } = req.params;
  try {
    const products = await ProductModel.find({ userId: userId });
    if (products.length > 0) {
      res.status(200).send({ message: products });
      console.log(products);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("Error getting all products");
  }
};

const GetOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (product) {
      res.status(200).send({ message: product });
      console.log(product);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("Error getting one product");
  }
};

export { DeleteProducts, GetAllProducts, GetOneProduct };
