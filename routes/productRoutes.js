// routes/dataRoutes.js
import express from "express";
import {
  getProduct,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProduct);
router.get("/products/:id", getProductById);

export default router;
