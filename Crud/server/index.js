import express from "express";
import "dotenv/config";
import cors from "cors";
import connect from "./config/db.js";
import productRoutes from "../server/routes/product.routes.js";

const app = express();

app.use(express.json());
app.use(cors());


app.use("/product", productRoutes);

app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
    res.status(404).send("Couldn't listen on port " + process.env.port);
  }
});
