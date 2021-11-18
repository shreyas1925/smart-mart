import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
// import products from "./data/products.js";

// import productRoutes from "./routes/productsRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import OrderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();

// For example purpose I have used this middleware
// app.use((req, res, next) => {
// console.log(req.originalUrl);
//   console.log("hello");
//   next();
// });

app.use(express.json());
//  This allw0s to set data to req.body

app.get("/", (req, res) => {
  res.send("My home page Api is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  5000,
  console.log(
    `Port is running in ${process.env.NODE_ENV} mode in the port ${PORT}`.yellow
      .bold
  )
);
