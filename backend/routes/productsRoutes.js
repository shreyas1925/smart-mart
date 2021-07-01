import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

// Fetch all the products
// @route GET /api/products
// @access public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// Fetch the particular product dependng on their id
// @route GET /api/products
// @access public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const product = products.find((p) => p._id === req.params.id);

    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      // .json({ message: "Products are not displayed" });
      throw new Error("Product not found");
    }
  })
);

export default router;
