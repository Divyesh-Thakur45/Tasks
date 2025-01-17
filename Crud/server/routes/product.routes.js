import express from "express";
import {
  DeleteProducts,
  GetAllProducts,
  GetOneProduct,
} from "../controllers/product.controller.js";
import upload from "../middlewares/multer.js";
import ProductModel from "../models/product.model.js";

const productRoutes = express.Router();

// Create Products
productRoutes.post(
  "/CreateProducts",
  upload.single("file"),
  async (req, res) => {
    const { email, password, gender, age, language, hobbies, date, userId } =
      req.body;
    try {
      await ProductModel.create({
        image: req.file.originalname,
        email,
        password,
        gender,
        age,
        language,
        hobbies,
        date,
        userId,
      });
      res.status(201).send({ message: "Product created successfully" });
    } catch (error) {
      console.log(error);
      res.status(404).send("Error creating products");
    }
  }
);

// Delete Products
productRoutes.delete("/DeleteProducts/:ProductId", DeleteProducts);

// Get All Products
productRoutes.get("/GetAllProducts/:userId", GetAllProducts);

// Get One Products
productRoutes.get("/GetOneProducts/:id", GetOneProduct);

// Update Products
productRoutes.patch(
  "/UpdateProducts/:ProductId",
  upload.single("file"),
  async (req, res) => {
    const { ProductId } = req.params;
    console.log(req.file);
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        ProductId,
        {
          ...req.body,
          image: req.file?.originalname,
        },
        {
          new: true,
        }
      );
      res.status(200).send({ message: updatedProduct });
      console.log(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(404).send("Error updating products");
    }
  }
);

export default productRoutes;
