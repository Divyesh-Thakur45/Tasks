import express from "express";
import {
  CreateProducts,
  DeleteProducts,
  GetAllProducts,
  GetOneProduct,
  UpdateProducts,
} from "../controllers/product.controller.js";
import upload from "../middlewares/multer.js";

const productRoutes = express.Router();

// Create Products
productRoutes.post("/CreateProducts", upload.single("file"), CreateProducts);

// Delete Products
productRoutes.delete("/DeleteProducts/:ProductId", DeleteProducts);

// Get All Products
productRoutes.get("/GetAllProducts/:userId", GetAllProducts);

// Get One Products
productRoutes.get("/GetOneProducts/:id", GetOneProduct);

// Update Products
productRoutes.patch("/UpdateProducts/:ProductId", UpdateProducts);

export default productRoutes;
