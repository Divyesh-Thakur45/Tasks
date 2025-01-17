import express from "express";
import {
  DeleteProducts,
  GetAllProducts,
  GetOneProduct,
  UpdateProducts,
} from "../controllers/product.controller.js";
import upload from "../middlewares/multer.js";
import ProductModel from "../models/product.model.js";

const productRoutes = express.Router();

// Create Products
productRoutes.post(
  "/CreateProducts",
  upload.single("file"),
  async (req, res) => {
    const { email, password, gender, age, date, userId } = req.body;
    console.log(req.file);

    const image = req.file;
    try {
      await ProductModel.create({
        image,
        email,
        password,
        gender,
        age,
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
productRoutes.patch("/UpdateProducts/:ProductId", UpdateProducts);

export default productRoutes;
